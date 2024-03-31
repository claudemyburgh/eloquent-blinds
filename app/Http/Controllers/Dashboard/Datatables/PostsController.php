<?php

namespace App\Http\Controllers\Dashboard\Datatables;

use App\Http\Requests\Post\StorePostRequest;
use App\Http\Requests\Post\UpdatePostRequest;
use App\Models\Gallery;
use App\Models\Post;
use Designbycode\Datatables\DatatablesController;
use Illuminate;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

/**
 * @param Illuminate\Http\Request $request
 */
class PostsController extends DatatablesController
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware(['permission:edit post|delete post|update post']);
    }

    public function builder(): Builder
    {
        return Post::query();
    }

    public function index(Request $request): Response
    {
        return Inertia::render('Dashboard/Table/Index', $this->getResponse($request));
    }

    public function edit(string $id): Response
    {
        return Inertia::render('Dashboard/Posts/Edit', [
            'post' => Post::with('media', 'galleries')->findOrFail($id),
            'galleries' => Gallery::get()
        ]);
    }

    /**
     * @param UpdatePostRequest $request
     * @param string $id
     */
    public function update(UpdatePostRequest $request, string $id): void
    {
        $post = Post::with('media')->findOrFail($id);
        $post->update($request->except(['gallery']));
        if ($request['gallery']) {
            $post->galleries()->sync($request->only(['gallery']));
        } else {
            $post->galleries()->detach();
        }
    }

    public function store(StorePostRequest $request): Illuminate\Http\RedirectResponse
    {
        $post = Post::create(array_merge($request->validated(), [
            'user_id' => auth()->user()->id,
        ]));
        return to_route('dashboard.posts.edit', $post->id);
    }

    public function destroy(string $ids): void
    {
        $this->itemsDelete($ids);
    }

    public function upload(Request $request): void
    {
        $request->validate([
            'image.*' => 'image|mimes:jpeg,jpg,png,gif,webp|max:10000',
        ]);

        if ($request->has('image')) {
            $post = Post::find($request->id);
            $post->addMedia($request->image)
                ->toMediaCollection('default');
        }
    }

    protected function getQuickCreateColumns(): array
    {
        return ['title', 'slug'];
    }

    protected function getDisplayableColumnNames(): array
    {
        return ['id', 'title', 'slug', 'description'];
    }
}

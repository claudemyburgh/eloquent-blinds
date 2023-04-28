<?php

namespace App\Http\Controllers\Dashboard\Datatables;

use App\Http\Requests\Post\StorePostRequest;
use App\Http\Requests\Post\UpdatePostRequest;
use App\Models\Post;
use Designbycode\Datatables\DatatablesController;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

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
        return Inertia::render("Dashboard/Table/Index", $this->getResponse($request));
    }

    /**
     * @param string $id
     * @return Response
     */
    public function edit(string $id): Response
    {
        $post = Post::with('media')->findOrFail($id);
        return Inertia::render('Dashboard/Posts/Edit', ['post' => $post]);
    }

    /**
     * @param Request $request
     * @param string $id
     * @return void
     */
    public function update(UpdatePostRequest $request, string $id): void
    {
        Post::with("media")->findOrFail($id)
            ->update($request->validated());
    }

    public function store(StorePostRequest $request)
    {
        
        $post = Post::create(array_merge($request->validated(), [
            'user_id' => auth()->user()->id
        ]));

        return to_route('dashboard.posts.edit', $post->id);
    }

    public function destroy(string $ids)
    {
        $this->itemsDelete($ids);
    }

    public function upload(Request $request)
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

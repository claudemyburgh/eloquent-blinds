<?php

namespace App\Http\Controllers\Dashboard\Datatables;

use App\Http\Requests\Gallery\StoreGalleryRequest;
use App\Http\Requests\Gallery\UpdateGalleryRequest;
use App\Models\Gallery;
use Designbycode\Datatables\DatatablesController;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GalleryController extends DatatablesController
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware(['permission:edit category|delete category|update category']);
    }

    public function builder(): Builder
    {
        return Gallery::query();
    }

    public function index(Request $request): Response
    {
        return Inertia::render('Dashboard/Table/Index', $this->getResponse($request));
    }

    public function store(StoreGalleryRequest $request)
    {
        $gallery = Gallery::create($request->validated());
        return to_route('dashboard.galleries.edit', $gallery->id);
    }

    public function edit(string $id): Response
    {
        $gallery = Gallery::with('media')->findOrFail($id);

        return Inertia::render('Dashboard/Galleries/Edit', ['gallery' => $gallery]);
    }

    public function update(UpdateGalleryRequest $request, string $id): void
    {
        Gallery::with('media')->findOrFail($id)
            ->update($request->validated());
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
            $post = Gallery::find($request->id);
            $post->addMedia($request->image)
                ->toMediaCollection('default');
        }
    }

    protected function getQuickCreateColumns(): array
    {
        return ['title'];
    }

    protected function getDisplayableColumnNames(): array
    {
        return ['id', 'title', 'slug', 'live'];
    }

}

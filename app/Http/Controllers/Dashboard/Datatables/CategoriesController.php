<?php

namespace App\Http\Controllers\Dashboard\Datatables;

use App\Http\Requests\Category\StoreCategoryRequest;
use App\Http\Requests\Category\UpdateCategoryRequest;
use App\Models\Category;
use Designbycode\Datatables\DatatablesController;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class CategoriesController extends DatatablesController
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware(['permission:edit category|delete category|update category']);
    }

    public function builder(): Builder
    {
        return Category::query();
    }

    public function index(Request $request): Response
    {
        return Inertia::render('Dashboard/Table/Index', $this->getResponse($request));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        Cache::forget('cat-all');
        $category = Category::create($request->validated());

        return to_route('dashboard.categories.edit', $category);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $category = Category::with('media')->find($id);

        return Inertia::render('Dashboard/Categories/Edit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, string $id)
    {
        Cache::forget('cat-all');
        Cache::forget('categories-list');

        Category::findOrFail($id)
            ->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $ids)
    {
        Cache::forget('cat-all');
        $this->itemsDelete($ids);
    }

    public function upload(Request $request)
    {
        $request->validate([
            'image.*' => 'image|mimes:jpeg,jpg,png,gif,webp|max:10000',
        ]);

        if ($request->has('image')) {
            $category = Category::find($request->id);
            $category->addMedia($request->image)
                ->toMediaCollection('default');
        }
    }

    protected function getQuickCreateColumns(): array
    {
        return ['title'];
    }

    protected function getDisplayableColumnNames(): array
    {
        return ['id', 'title', 'slug'];
    }
}

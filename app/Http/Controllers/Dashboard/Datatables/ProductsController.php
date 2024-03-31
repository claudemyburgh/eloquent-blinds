<?php

namespace App\Http\Controllers\Dashboard\Datatables;

use App\Http\Requests\Product\StoreProductRequest;
use App\Http\Requests\Product\UpdateProductRequest;
use App\Models\Gallery;
use App\Models\Product;
use Designbycode\Datatables\DatatablesController;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductsController extends DatatablesController
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware(['permission:edit product|delete product|update product']);
    }

    public function builder(): Builder
    {
        return Product::query();
    }

    public function index(Request $request): Response
    {
        return Inertia::render('Dashboard/Table/Index', $this->getResponse($request));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request): RedirectResponse
    {
        $post = Product::create($request->validated());
        return to_route('dashboard.products.edit', $post);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id): Response
    {
        return Inertia::render('Dashboard/Products/Edit', [
                'product' => Product::with('media', 'galleries')->find($id),
                'galleries' => Gallery::get()
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, string $id): void
    {
        $product = Product::findOrFail($id);
        $product->update($request->except(['gallery']));

        if ($request['gallery']) {
            $product->galleries()->sync($request->only(['gallery']));
        } else {
            $product->galleries()->detach();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
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
            $product = Product::find($request->id);
            $product->addMedia($request->image)
                ->toMediaCollection('default');
        }
    }

    protected function getQuickCreateColumns(): array
    {
        return ['title', 'slug', 'category_id'];
    }

    protected function getDisplayableColumnNames(): array
    {
        return ['id', 'title', 'slug', 'live'];
    }
}

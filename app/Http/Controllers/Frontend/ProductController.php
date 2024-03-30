<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Support\Facades\Cache;
use Illuminate\View\View;

class ProductController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Category $category, Product $product): View
    {
        return view('product', [
            'product' => Cache::remember('product-id-' . $product->id, 86400, fn() => $product->load('media', 'galleries.media')),
            'category' => Cache::remember('product-category-id-' . $category->id, 86400, fn() => $category->load('products.media')),
        ]);
    }
}

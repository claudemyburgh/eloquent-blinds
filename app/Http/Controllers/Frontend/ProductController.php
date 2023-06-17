<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Category $category, Product $product)
    {

        $product->load('media');

        return Inertia::render('Frontend/Product', compact('product', 'category'));
    }
}

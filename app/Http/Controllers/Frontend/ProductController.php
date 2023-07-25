<?php

    namespace App\Http\Controllers\Frontend;

    use App\Http\Controllers\Controller;
    use App\Models\Category;
    use App\Models\Product;

    class ProductController extends Controller
    {
        /**
         * Handle the incoming request.
         */
        public function __invoke(Category $category, Product $product)
        {
            $product->load('media');
            return view('product', compact('product', 'category'));
        }
    }

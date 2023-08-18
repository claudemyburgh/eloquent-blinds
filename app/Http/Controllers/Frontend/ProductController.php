<?php

    namespace App\Http\Controllers\Frontend;

    use App\Http\Controllers\Controller;
    use App\Models\Category;
    use App\Models\Product;
    use Illuminate\View\View;

    class ProductController extends Controller
    {
        /**
         * Handle the incoming request.
         */
        public function __invoke(Category $category, Product $product): View
        {
            $product->load('media');
            $category->load('products.media');
            return view('product', compact('product', 'category'));
        }
    }

<?php

    namespace App\Http\Controllers\Frontend;

    use App\Http\Controllers\Controller;
    use App\Models\Category;
    use Illuminate\Support\Facades\Cache;

    class CategoryController extends Controller
    {
        /**
         * Handle the incoming request.
         */
        public function __invoke(Category $category)
        {
            $category = Cache::remember('category-' . $category->id, 3600, fn() => $category->load('media', 'products.media'));
            $descendants = Cache::remember('descendants-' . $category->id, 3600, fn() => $category->load('descendants.products.media'));
            return view('category', ['category' => $category, 'descendants' => $descendants]);
        }
    }

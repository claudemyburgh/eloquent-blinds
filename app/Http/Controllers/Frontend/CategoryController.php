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
            $category = Cache::rememberForever('category-' . $category->id, fn() => $category->load('media', 'products.media'));
            $descendants = Cache::rememberForever('descendants-' . $category->id, fn() => $category->load('descendants.products.media'));
            if ($category->slug === 'motion-blinds') {
                return view('category_motion', ['category' => $category, 'descendants' => $descendants]);
            } else {
                return view('category', ['category' => $category, 'descendants' => $descendants]);
            }
        }
    }

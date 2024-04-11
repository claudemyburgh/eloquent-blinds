<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Support\Facades\Cache;
use Illuminate\View\View;

class CategoriesShowController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Category $category): View
    {
        $category = Cache::rememberForever('category-' . $category->id, fn() => $category->load('media', 'products.media'));
        $descendants = Cache::rememberForever('descendants-' . $category->id, fn() => $category->load('descendants.products.media'));
        return view('categories.show', ['category' => $category, 'descendants' => $descendants]);

    }
}

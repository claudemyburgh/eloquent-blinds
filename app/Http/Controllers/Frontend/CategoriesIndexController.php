<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\View\View;

class CategoriesIndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): View
    {
        $categories = Cache::rememberForever('categories-list', fn() => Category::live()->with('media', 'products', 'galleries.media')->tree()->get()->toTree());
        return view('categories.index', [
            'categories' => $categories,
        ]);
    }
}

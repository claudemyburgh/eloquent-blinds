<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class CategoriesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): Response
    {
        $categories = Cache::remember('categories-list', 3600, fn() => Category::live()->with('media', 'products')->tree()->get()->toTree());

        return Inertia::render('Frontend/Categories', [
            'categories' => $categories
        ]);
    }
}

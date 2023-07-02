<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
  /**
   * Handle the incoming request.
   */
  public function __invoke(Category $category): Response
  {

    $category = Cache::remember('category', 1, function () use ($category) {
      return $category->load('media', 'products.media');
    });

    $descendants = Cache::remember('descendants', 1, function () use ($category) {
      return $category->descendants()->with('media', 'products.media')->live()->get();
    });


    return Inertia::render('Frontend/Category', [
      'category' => $category,
      'descendants' => $descendants
    ]);
  }
}

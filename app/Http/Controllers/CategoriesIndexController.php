<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class CategoriesIndexController extends Controller
{
  /**
   * Handle the incoming request.
   */
  public function __invoke()
  {

    return Inertia::render('Category/CategoryList');
  }
}

<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Inertia\Inertia;

class ProductsController extends Controller
{

  public function index(Category $category)
  {
    return Inertia::render('Products/Products', compact('category'));
  }


}

<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryCreateRequest;
use App\Models\Category;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use function explode;

class CategoriesController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(): Response
  {

    $categories = Category::all();

    return Inertia::render("Dashboard/Category/Categories", [
      'categories' => $categories
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(CategoryCreateRequest $request): RedirectResponse
  {

    $category = Category::create($request->only('title'));

    return to_route('dashboard.categories.edit', $category);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create(): Response
  {
    return Inertia::render('Dashboard/Category/CategoryEdit');
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Category $category): Response
  {
    return Inertia::render('Dashboard/Category/CategoryEdit', [
      'category' => $category
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy($ids)
  {
    $categories = Category::whereIn('id', explode(',', $ids));

    dd($categories);

  }
}

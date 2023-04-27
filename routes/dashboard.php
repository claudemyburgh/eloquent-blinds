<?php

use App\Http\Controllers\Dashboard\ContactsController;
use App\Http\Controllers\Dashboard\DashboardIndexController;
use App\Http\Controllers\Dashboard\Datatables\CategoriesController;
use App\Http\Controllers\Dashboard\Datatables\PostsController;
use App\Http\Controllers\Dashboard\Datatables\ProductsController;
use App\Http\Controllers\Dashboard\Datatables\UsersController;
use App\Http\Controllers\Dashboard\DeleteImageController;
use App\Http\Controllers\Dashboard\MessagesController;
use App\Http\Controllers\Dashboard\SendEmailController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/dashboard', DashboardIndexController::class)->name('dashboard')->middleware(['auth', 'verified', 'role:admin']);


Route::group([
    'middleware' => ['auth', 'verified', 'role:admin'],
    'namespace' => '\App\Http\Controllers\Dashboard\Datatables',
    'prefix' => 'dashboard', 'as' => 'dashboard.'], function () {


    Route::resource('users', UsersController::class)->except('show', 'create');
    Route::resource('categories', CategoriesController::class)->except('show', 'create');
    Route::resource('posts', PostsController::class)->except('show', 'create');
    Route::resource('products', ProductsController::class)->except('show', 'create');

    Route::post('posts/{posts}/upload', [PostsController::class, 'upload'])->name('posts.upload');
    Route::post('users/{users}/upload', [UsersController::class, 'upload'])->name('users.upload');
    Route::post('categories/{category}/upload', [CategoriesController::class, 'upload'])->name('categories.upload');
    Route::post('products/{product}/upload', [ProductsController::class, 'upload'])->name('products.upload');
});


Route::group([
    'middleware' => ['auth', 'verified', 'role:admin'],
    'namespace' => '\App\Http\Controllers\Dashboard',
    'prefix' => 'dashboard', 'as' => 'dashboard.'], function () {

    Route::delete('/{media}', DeleteImageController::class)->name('media.delete');
    Route::resource('/messages', MessagesController::class);

    Route::post('email', SendEmailController::class)->name('email.send');
});


Route::group([
    'namespace' => '\App\Http\Controllers\Dashboard',
    'prefix' => 'dashboard', 'as' => 'dashboard.'], function () {

    Route::get('/contacts', ContactsController::class)->name('contacts');

});

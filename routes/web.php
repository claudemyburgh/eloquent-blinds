<?php

use App\Http\Controllers\CategoriesIndexController;
use App\Http\Controllers\FreeQuoteController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\HowToOrderController;
use App\Http\Controllers\ProductsController;
use Illuminate\Support\Facades\Route;


Route::get('/', HomeController::class)->name('index');

Route::get('/categories', CategoriesIndexController::class)->name('categories.index');

Route::get('/how-to-order', HowToOrderController::class)->name('how-to-order');

Route::get('/free-quote', [FreeQuoteController::class, 'index'])->name('free-quote');

require __DIR__ . '/auth.php';

require __DIR__ . '/dashboard.php';

Route::get('/{category:slug}', [ProductsController::class, 'index'])->name('products.index');


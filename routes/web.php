<?php

use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\Frontend\CategoriesController;
use App\Http\Controllers\Frontend\CategoryController;
use App\Http\Controllers\Frontend\CategoryProductsController;
use App\Http\Controllers\Frontend\FAQController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\ProductController;
use App\Http\Controllers\Frontend\QuoteController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\PrivacyPolicyController;
use Illuminate\Support\Facades\Route;

require __DIR__ . '/dashboard.php';
require __DIR__ . '/auth.php';

Route::get('/', HomeController::class)->name('home');
//Route::get('reviews', ReviewsController::class)->name('reviews');
Route::get('faq', FAQController::class)->name('faq');
Route::get('quote', QuoteController::class)->name('quote');
Route::get('categories', CategoriesController::class)->name('categories');
Route::get('privacy-policy', PrivacyPolicyController::class)->name('privacy-policy');

Route::get('category/{category:slug}', CategoryController::class)->name('category');
Route::get('{category:slug}/{product:slug}', ProductController::class)->name('product');

Route::post('newsletter', [NewsletterController::class, 'store'])->name('newsletter');
Route::get('newsletter', [NewsletterController::class, 'show'])->name('newsletter');
Route::post('contact/form', ContactFormController::class)->name('contact.form');

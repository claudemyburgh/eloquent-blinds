<?php

use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\Frontend\BrochuresIndexController;
use App\Http\Controllers\Frontend\CategoriesIndexController;
use App\Http\Controllers\Frontend\CategoriesShowController;
use App\Http\Controllers\Frontend\FAQIndexController;
use App\Http\Controllers\Frontend\GalleriesIndexController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\PostsIndexController;
use App\Http\Controllers\Frontend\PrivacyPolicyController;
use App\Http\Controllers\Frontend\ProductShowController;
use App\Http\Controllers\Frontend\QuoteIndexController;
use App\Http\Controllers\Frontend\ReviewsIndexController;
use App\Http\Controllers\GoogleReviewController;
use App\Http\Controllers\NewsletterController;
use Illuminate\Support\Facades\Route;

require __DIR__ . '/dashboard.php';
require __DIR__ . '/auth.php';

Route::get('/', HomeController::class)->name('home');
Route::get('reviews', ReviewsIndexController::class)->name('reviews.index');
Route::get('faq', FAQIndexController::class)->name('faq.index');
Route::get('free-quote', QuoteIndexController::class)->name('quote.index');
Route::get('categories', CategoriesIndexController::class)->name('categories.index');
Route::get('brochures', BrochuresIndexController::class)->name('brochures.index');
Route::get('privacy-policy', PrivacyPolicyController::class)->name('privacy-policy');
Route::get('category/{category:slug}', CategoriesShowController::class)->name('categories.show');
Route::get('{category:slug}/{product:slug}', ProductShowController::class)->name('products.show');
Route::get('posts', PostsIndexController::class)->name('posts.index');
Route::post('newsletter', [NewsletterController::class, 'store'])->name('newsletter.store');
Route::get('newsletter', [NewsletterController::class, 'show'])->name('newsletter');
Route::get('google-reviews', GoogleReviewController::class)->name('google-reviews');
Route::get('gallery', GalleriesIndexController::class)->name('gallery');


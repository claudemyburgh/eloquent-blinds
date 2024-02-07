<?php

    use App\Http\Controllers\ContactFormController;
    use App\Http\Controllers\Frontend\CategoriesController;
    use App\Http\Controllers\Frontend\CategoryController;
    use App\Http\Controllers\Frontend\CategoryProductsController;
    use App\Http\Controllers\Frontend\FAQController;
    use App\Http\Controllers\Frontend\HomeController;
    use App\Http\Controllers\Frontend\NavigationLinksController;
    use App\Http\Controllers\Frontend\PrivacyPolicyController;
    use App\Http\Controllers\Frontend\ProductController;
    use App\Http\Controllers\Frontend\QuoteController;
    use App\Http\Controllers\Frontend\ReviewsController;
    use App\Http\Controllers\GoogleReviewController;
    use App\Http\Controllers\NewsletterController;
    use Illuminate\Support\Facades\Route;

    require __DIR__ . '/dashboard.php';
    require __DIR__ . '/auth.php';

    Route::get('/', HomeController::class)->name('home');
    Route::get('reviews', ReviewsController::class)->name('reviews');
    Route::get('faq', FAQController::class)->name('faq');
    Route::get('free-quote', QuoteController::class)->name('quote');
    Route::get('categories', CategoriesController::class)->name('categories');
    Route::get('privacy-policy', PrivacyPolicyController::class)->name('privacy-policy');

    Route::get('category/{category:slug}', CategoryController::class)->name('category');
//    Route::get('tag/{tag:slug}', TagController::class)->name('tag');
    Route::get('{category:slug}/{product:slug}', ProductController::class)->name('product');

    Route::post('newsletter', [NewsletterController::class, 'store'])->name('newsletter.store');
    Route::get('newsletter', [NewsletterController::class, 'show'])->name('newsletter');
    Route::post('contact/form', ContactFormController::class)->name('contact.form');

    Route::get('google-reviews', GoogleReviewController::class)->name('google-reviews');

    //    Route::get("search", SearchResults::class)->name('search');

    Route::get('z', [NavigationLinksController::class, 'blinds']);

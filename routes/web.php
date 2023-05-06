<?php


use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\NewsletterController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');


//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//    ]);
//});


Route::post('newsletter', [NewsletterController::class, 'store'])->name('newsletter');
Route::get('newsletter', [NewsletterController::class, 'show'])->name('newsletter');
Route::post('contact/form', ContactFormController::class)->name('contact.form');

require __DIR__ . '/auth.php';

require __DIR__ . '/dashboard.php';

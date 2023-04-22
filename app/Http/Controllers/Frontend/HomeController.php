<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Newsletter\Facades\Newsletter;

class HomeController extends Controller
{


    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): Response
    {

        Newsletter::subscribe('claudemyburgh@gmail.com');

        return Inertia::render("Frontend/Home", [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }
}

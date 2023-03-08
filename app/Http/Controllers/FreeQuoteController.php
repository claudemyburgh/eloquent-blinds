<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class FreeQuoteController extends Controller
{
  public function index(): Response
  {
    return Inertia::render('FreeQuote');
  }
}

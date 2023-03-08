<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HowToOrderController extends Controller
{

  public function __invoke()
  {
    return Inertia::render('HowToOrder');
  }
}

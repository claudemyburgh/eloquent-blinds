<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{

  public function __invoke()
  {

    $users = User::all();

    return Inertia::render('Dashboard/Dashboard', [
      'users' => $users
    ]);
  }
}

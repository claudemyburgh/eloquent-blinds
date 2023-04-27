<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Resources\ContactCollection;
use App\Models\User;

class ContactsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        return new ContactCollection(User::all());
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Newsletter\Facades\Newsletter;

class NewsletterController extends Controller
{

    public function store(Request $request)
    {
        $request->validate(['email' => 'required|email']);
        Newsletter::subscribe($request->email);
    }

    public function show()
    {
        dd(Newsletter::hasMember('claude@eloquentblinds.co.za'));
    }

}

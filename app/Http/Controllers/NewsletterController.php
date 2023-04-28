<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Newsletter\Facades\Newsletter;

class NewsletterController extends Controller
{

    public function store(Request $request)
    {
        $request->validate(['email' => 'required|email']);

    }

    public function show()
    {
        return Newsletter::getMember('claude@eloquentblinds.co.za');

    }

}

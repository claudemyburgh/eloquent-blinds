<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Newsletter\Facades\Newsletter;

class NewsletterController extends Controller
{

    public function store(Request $request)
    {
        $request->validate(['email' => 'required|email']);
        if (!Newsletter::isSubscribed($request->email)) {
            Newsletter::subscribe($request->email);
        }

    }

    public function show()
    {
//        dd(Newsletter::getMember('claude@eloquentblinds.co.za'));

    }

}

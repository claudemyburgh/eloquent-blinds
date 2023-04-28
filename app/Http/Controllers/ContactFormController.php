<?php

namespace App\Http\Controllers;

use App\Events\ContactSubmitted;
use App\Http\Requests\ContactFormRequest;

class ContactFormController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(ContactFormRequest $request)
    {
        event(new ContactSubmitted($request->validated()));

        return redirect()->back()->with("flash", "Success");
    }
}

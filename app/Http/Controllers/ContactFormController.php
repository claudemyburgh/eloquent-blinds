<?php

namespace App\Http\Controllers;

use App\Events\ContactSubmitted;
use App\Http\Requests\ContactFormRequest;
use App\Mail\Contact;
use App\Mail\Quote;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;

class ContactFormController extends Controller implements ShouldQueue
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(ContactFormRequest $request): RedirectResponse
    {
//        event(new ContactSubmitted($request->validated()));

        Mail::to('claude@eloquentblinds.co.za')->queue(new Quote($request->validated()));


        return redirect()->back()->with('flash', 'Success');
    }
}

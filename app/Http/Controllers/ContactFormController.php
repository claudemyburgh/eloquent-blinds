<?php

namespace App\Http\Controllers;

use App\Events\ContactSubmitted;
use App\Http\Requests\ContactFormRequest;
use Illuminate\Http\RedirectResponse;

class ContactFormController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(ContactFormRequest $request): RedirectResponse
    {
        event(new ContactSubmitted($request->validated()));

        return redirect()->back()->with('flash', 'Success');
    }
}

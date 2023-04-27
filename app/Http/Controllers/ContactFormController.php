<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactFormRequest;

class ContactFormController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(ContactFormRequest $request)
    {
        return $request->validated();
    }
}

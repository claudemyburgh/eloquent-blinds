<?php

namespace App\Http\Controllers;

use App\Events\ContactSubmitted;
use App\Http\Requests\ContactFormRequest;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Http\RedirectResponse;

class ContactFormController extends Controller implements ShouldQueue
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

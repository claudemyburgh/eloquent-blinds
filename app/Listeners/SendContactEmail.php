<?php

namespace App\Listeners;

use App\Events\ContactSubmitted;
use App\Mail\Contact;
use Illuminate\Support\Facades\Mail;

class SendContactEmail
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {

    }

    /**
     * Handle the event.
     */
    public function handle(ContactSubmitted $event): void
    {
        Mail::to(config('mail.from.address'))->send(new Contact($event->data));
    }
}

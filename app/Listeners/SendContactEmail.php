<?php

namespace App\Listeners;

use App\Events\ContactSubmitted;
use App\Mail\Contact;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class SendContactEmail implements ShouldQueue
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
        Mail::to(config('mail.from.address'))->queue(new Contact($event->data));
    }
}

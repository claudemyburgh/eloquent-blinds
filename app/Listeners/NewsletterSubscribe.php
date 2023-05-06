<?php

namespace App\Listeners;

use App\Events\ContactSubmitted;
use Spatie\Newsletter\Facades\Newsletter;

class NewsletterSubscribe
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(ContactSubmitted $event): void
    {
        Newsletter::subscribeOrUpdate($event->data['email'], ['first_name' => $event->data['first_name'], 'last_name' => $event->data['last_name']]);
    }
}

<?php

namespace App\Listeners;

use App\Events\ContactSubmitted;
use App\Mail\ThankYou;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendThankYourMail
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
        Mail::to($event->data['email'])->queue(new ThankYou($event->data));
    }
}

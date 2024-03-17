<?php

    namespace App\Listeners;

    use App\Events\ContactSubmitted;
    use App\Mail\Contact;
    use Illuminate\Contracts\Queue\ShouldQueue;
    use Illuminate\Mail\Mailables\Address;
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
            Mail::to(config('mail.from.address'))
                ->cc(new Address(config('dashboard.admin.xavier.email'), config('dashboard.admin.xavier.name')))
                ->bcc(new Address(config('dashboard.admin.claude.email'), config('dashboard.admin.claude.name')))
                ->queue(new Contact($event->data));
        }
    }

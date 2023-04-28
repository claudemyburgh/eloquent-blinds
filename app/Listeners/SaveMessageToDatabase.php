<?php

namespace App\Listeners;

use App\Events\ContactSubmitted;
use App\Helpers\GeneratePassword;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class SaveMessageToDatabase
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
        $user = User::where('email', $event->data['email'])->first();

        if (!$user) {
            $user = User::create([
                'name' => $event->data['name'],
                'email' => $event->data['email'],
                'phone' => $event->data['phone'],
                'password' => Hash::make(GeneratePassword::password(12)),
            ]);
        }


        $user->messages()->create([
            'subject' => $event->data['subject'],
            'message' => $event->data['message'],
        ]);

        Session::now('flash', 'Success');

    }
}

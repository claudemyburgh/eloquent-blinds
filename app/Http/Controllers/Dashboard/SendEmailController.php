<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Mail\Replay;
use App\Models\Message;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Support\Facades\Mail;

class SendEmailController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        $request->validate(['name' => 'required', 'email' => 'required|email', 'subject' => 'required', 'message' => 'required', 'parent_id' => 'required', 'user_id' => 'required']);

        $message = Message::create([
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message,
            'parent_id' => $request->parent_id,
            'user_id' => $request->user_id,
            'read_at' => Carbon::now(),
        ]);


        Mail::to(new Address($request->email, $request->name))->queue(new Replay([
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message,
        ]));

    }
}

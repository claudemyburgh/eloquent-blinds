<?php

namespace App\Observers;

use App\Models\Message;
use Illuminate\Support\Facades\Cache;

class MessageObserver
{
    /**
     * Handle the Message "created" event.
     */
    public function created(Message $message): void
    {
        Cache::forget('messages');
    }

    /**
     * Handle the Message "updated" event.
     */
    public function updated(Message $message): void
    {
        Cache::forget('messages');
    }

    /**
     * Handle the Message "deleted" event.
     */
    public function deleted(Message $message): void
    {
        Cache::forget('messages');
    }

    /**
     * Handle the Message "restored" event.
     */
    public function restored(Message $message): void
    {
        Cache::forget('messages');
    }

    /**
     * Handle the Message "force deleted" event.
     */
    public function forceDeleted(Message $message): void
    {
        Cache::forget('messages');
    }
}

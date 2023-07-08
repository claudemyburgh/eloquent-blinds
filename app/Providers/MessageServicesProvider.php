<?php

namespace App\Providers;

use App\Http\Resources\Messages\MessageResource;
use Illuminate\Support\ServiceProvider;

class MessageServicesProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {

    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        MessageResource::withoutWrapping();
    }
}

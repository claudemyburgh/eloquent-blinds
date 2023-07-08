<?php

namespace App\Providers;

use App\Http\Resources\Users\UserResource;
use Illuminate\Support\ServiceProvider;

class UserServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        UserResource::withoutWrapping();
    }
}

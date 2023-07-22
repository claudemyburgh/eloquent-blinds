<?php

namespace App\Providers;

use App\View\Composers\CategoriesComposer;
use App\View\Composers\ContactPersonComposer;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;


class ViewComposerServiceProvider extends ServiceProvider
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
        View::composer('*', CategoriesComposer::class);
    }
}

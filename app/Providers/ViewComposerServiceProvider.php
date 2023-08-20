<?php

    namespace App\Providers;

    use App\View\Composers\CategoriesComposer;
    use App\View\Composers\ContactPersonComposer;
    use App\View\Composers\ResultsComposer;
    use App\View\Composers\SearchComposer;
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
            View::composer(['search'], ResultsComposer::class);
        }
    }

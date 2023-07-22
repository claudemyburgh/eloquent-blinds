<?php

    namespace App\Http\Controllers\Dashboard;

    use App\Http\Controllers\Controller;
    use Illuminate\Support\Facades\Artisan;

    class ActionsController extends Controller
    {
        public function sitemap(): void
        {
            set_time_limit(0);
            Artisan::call('sitemap:generate');
        }

        public function cacheClear(): void
        {
            Artisan::call('cache:clear');
        }

    }

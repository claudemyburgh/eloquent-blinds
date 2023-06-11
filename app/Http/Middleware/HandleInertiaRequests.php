<?php

namespace App\Http\Middleware;

use App\Models\Category;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'categories_all' => Cache::rememberForever('cat-all', function () {
                return Category::live()->orderBy('title')->tree()->get()->toTree();
            }),
//            'contacts' => Cache::rememberForever('contacts', function () {
//                return User::get();
//            }),

            'flash' => Session::get('flash'),

            'emails' => function () {
                return [
                    'unread' => Cache::remember('messages', 120, function () {
                        return Message::unread()->get()->count();
                    }),

                ];
            },

            'csrf' => csrf_token(),
            'api' => [
                'maps' => config('google.api.maps')
            ]
        ]);
    }
}

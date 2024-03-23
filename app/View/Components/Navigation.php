<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Navigation extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        $links = [
            [
                "name" => "Home",
                "route" => "home",
                "data" => null,
                "classes" => "hover:text-primary-500 dark:text-shadow "
            ],
            [
                "name" => "Shutters",
                "route" => "categories",
                "data" => null,
                "classes" => "hover:text-primary-500 dark:text-shadow "
            ],
            [
                "name" => "Blinds",
                "route" => "categories",
                "data" => null,
                "classes" => "hover:text-primary-500 dark:text-shadow "
            ],
//                [
//                    "name" => "Reviews",
//                    "route" => "reviews",
//                    "data" => "data",
//                    "classes" => "hover:text-primary-500 dark:text-shadow "
//                ],
//            [
//                "name" => "About Us",
//                "route" => "quote",
//                "data" => "data",
//                "classes" => "hover:text-primary-500 dark:text-shadow "
//            ],
            [
                "name" => "Faq's",
                "route" => "faq",
                "data" => "data",
                "classes" => "hover:text-primary-500 dark:text-shadow "
            ],
            [
                "name" => "Free Quote",
                "route" => "quote",
                "data" => "data",
                "classes" => "btn btn-gradient rounded-md text-white"
            ],
        ];

        return view('components.navigation', compact('links'));
    }
}

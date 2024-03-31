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
            (object)[
                "name" => "Home",
                "slug" => "home",
                "route" => "home",
                "data" => null,
                "classes" => "hover:text-primary-500 dark:text-shadow ",
                "show" => true
            ],
            (object)[
                "name" => "Shutters",
                "slug" => "shutters",
                "route" => "categories.index",
                "data" => null,
                "classes" => "hover:text-primary-500 dark:text-shadow ",
                "show" => true
            ],
            (object)[
                "name" => "Blinds",
                "slug" => "blinds",
                "route" => "categories.index",
                "data" => null,
                "classes" => "hover:text-primary-500 dark:text-shadow ",
                "show" => true
            ],
            (object)[
                "name" => "Reviews",
                "slug" => "reviews",
                "route" => "reviews.index",
                "data" => "data",
                "classes" => "hover:text-primary-500 dark:text-shadow ",
                "show" => false
            ],
            (object)[
                "name" => "About Us",
                "slug" => "quote",
                "route" => "quote.index",
                "data" => "data",
                "classes" => "hover:text-primary-500 dark:text-shadow ",
                "show" => false
            ],
            (object)[
                "name" => "Faq's",
                "slug" => "faq",
                "route" => "faq.index",
                "data" => "data",
                "classes" => "hover:text-primary-500 dark:text-shadow ",
                "show" => true
            ],
            (object)[
                "name" => "Gallery",
                "slug" => "gallery",
                "route" => "gallery",
                "data" => null,
                "classes" => "hover:text-primary-500 dark:text-shadow ",
                "show" => true
            ],
            (object)[
                "name" => "Brochures",
                "slug" => "brochures",
                "route" => "brochures.index",
                "data" => "data",
                "classes" => "hover:text-primary-500 dark:text-shadow ",
                "show" => false
            ],
            (object)[
                "name" => "Free Quote",
                "slug" => "quote",
                "route" => "quote.index",
                "data" => "data",
                "classes" => "btn btn-gradient rounded-md text-white",
                "show" => true
            ],
        ];


        return view('components.navigation.navigation', [
            'links' => collect($links)->where('show', true)
        ]);
    }
}

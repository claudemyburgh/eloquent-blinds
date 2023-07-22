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
                    "classes" => "hover:text-primary-500 dark:text-shadow "
                ],
                [
                    "name" => "Products",
                    "route" => "categories",
                    "classes" => "hover:text-primary-500 dark:text-shadow "
                ],
                [
                    "name" => "Reviews",
                    "route" => "reviews",
                    "classes" => "hover:text-primary-500 dark:text-shadow "
                ],
                [
                    "name" => "Faq's",
                    "route" => "faq",
                    "classes" => "hover:text-primary-500 dark:text-shadow "
                ],
                [
                    "name" => "Free Quote",
                    "route" => "quote",
                    "classes" => "btn btn-gradient text-white"
                ],
            ];

            return view('components.navigation', compact('links'));
        }
    }

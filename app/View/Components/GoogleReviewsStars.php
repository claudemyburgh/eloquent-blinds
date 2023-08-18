<?php

    namespace App\View\Components;

    use Closure;
    use Illuminate\Contracts\View\View;
    use Illuminate\View\Component;

    class GoogleReviewsStars extends Component
    {
        /**
         * Create a new component instance.
         */
        public function __construct(public float $rating = 1)
        {
            //
        }

        /**
         * Get the view / contents that represent the component.
         */
        public function render(): View|Closure|string
        {
            return view('components.google-reviews.stars');
        }
    }

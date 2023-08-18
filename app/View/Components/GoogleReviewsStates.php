<?php

    namespace App\View\Components;

    use Closure;
    use Illuminate\Contracts\View\View;
    use Illuminate\View\Component;

    class GoogleReviewsStates extends Component
    {
        /**
         * Create a new component instance.
         */
        public function __construct(public $reviews, public $count = null, public $ratingCount = null, public $averageRating = null)
        {
        }

        /**
         * Get the view / contents that represent the component.
         */
        public function render(): View|Closure|string
        {
            return view('components.google-reviews.states');
        }
    }

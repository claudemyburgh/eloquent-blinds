<?php

namespace App\View\Components;

use App\Models\Gallery;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class GalleryMedia extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct(public Gallery $gallery)
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.gallery-media');
    }
}

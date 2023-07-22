<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Livewire\Livewire;

class Counter extends Component
{

    public int $count = 0;

    public function increment(): void
    {
        $this->count++;
    }


    public function render()
    {
        return view('livewire.counter');
    }
}

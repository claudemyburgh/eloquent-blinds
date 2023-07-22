<?php

namespace App\Http\Livewire;

use Livewire\Component;

class ThemeSwitcher extends Component
{

    public $theme;

    public function mount(): void
    {
        $this->theme = session('theme', 'default');
    }

    public function toggleTheme(): void
    {
        if ($this->theme === 'system') {
            $this->theme = 'dark';
        } elseif ($this->theme === 'dark') {
            $this->theme = 'light';
        } else {
            $this->theme = 'system';
        }
        session(['theme' => $this->theme]);
        $this->emit('colorSchemeUpdated', $this->theme);
    }

    public function render()
    {
        return view('livewire.theme-switcher');
    }
}

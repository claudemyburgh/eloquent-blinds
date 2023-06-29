<?php

namespace App\Observers;

use App\Models\User;

class UserObserver
{
    public function creating(User $user): void
    {
        $user->assignRole('client');
    }

    public function deleted(User $user): void
    {

    }
}

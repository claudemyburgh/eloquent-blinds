<?php

namespace App\Observers;

use App\Models\User;

class UserObserver
{
    public function creating(User $user)
    {
        $user->assignRole('client');
    }

    public function deleted(User $user): void
    {

    }
}

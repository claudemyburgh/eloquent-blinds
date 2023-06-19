<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'first_name' => 'Claude',
                'last_name' => 'Myburgh',
                'email' => config('dashboard.admin.claude.email'),
                'password' => bcrypt(config('dashboard.admin.claude.password')),
                'phone' => config('dashboard.admin.claude.phone'),
            ],
            [
                'first_name' => 'Hendry',
                'last_name' => 'Ollewagen',
                'email' => config('dashboard.admin.hendry.email'),
                'password' => bcrypt(config('dashboard.admin.hendry.password')),
                'phone' => config('dashboard.admin.hendry.phone'),
            ],
        ];

        foreach ($users as $user) {
            $u = User::create($user);
            $u->assignRole('admin');
        }
    }
}

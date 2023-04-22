<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            ['name' => 'admin'],
            ['name' => 'client'],
        ];

        foreach ($roles as $role) {
            $r = Role::create($role);

            if ($r->name === 'admin') {
                foreach (Permission::get() as $per) {
                    $r->givePermissionTo($per);
                }
            }

        }

    }
}

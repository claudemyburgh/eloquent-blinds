<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            ['name' => 'edit post'],
            ['name' => 'delete post'],
            ['name' => 'update post'],

            ['name' => 'edit user'],
            ['name' => 'delete user'],
            ['name' => 'update user'],

            ['name' => 'edit category'],
            ['name' => 'delete category'],
            ['name' => 'update category'],

            ['name' => 'edit product'],
            ['name' => 'delete product'],
            ['name' => 'update product'],
        ];

        foreach ($permissions as $permission) {
            Permission::create($permission);
        }


    }
}

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
            ['name' => 'create post'],
            ['name' => 'edit post'],
            ['name' => 'delete post'],
            ['name' => 'update post'],

            ['name' => 'create user'],
            ['name' => 'edit user'],
            ['name' => 'delete user'],
            ['name' => 'update user'],

            ['name' => 'create category'],
            ['name' => 'edit category'],
            ['name' => 'delete category'],
            ['name' => 'update category'],

            ['name' => 'create product'],
            ['name' => 'edit product'],
            ['name' => 'delete product'],
            ['name' => 'update product'],

            ['name' => 'create gallery'],
            ['name' => 'edit gallery'],
            ['name' => 'delete gallery'],
            ['name' => 'update gallery'],
        ];

        foreach ($permissions as $permission) {
            Permission::create($permission);
        }

    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // users permissions
        Permission::create(['name' => 'list users']);
        Permission::create(['name' => 'create users']);
        Permission::create(['name' => 'update users']);
        Permission::create(['name' => 'delete users']);
        // roles permissions
        Permission::create(['name' => 'list roles']);
        Permission::create(['name' => 'create roles']);
        Permission::create(['name' => 'update roles']);
        Permission::create(['name' => 'delete roles']);
        // permissions permissions
        Permission::create(['name' => 'list permissions']);
        Permission::create(['name' => 'create permissions']);
        Permission::create(['name' => 'update permissions']);
        Permission::create(['name' => 'delete permissions']);
        // offices permissions
        Permission::create(['name' => 'list offices']);
        Permission::create(['name' => 'create offices']);
        Permission::create(['name' => 'update offices']);
        Permission::create(['name' => 'delete offices']);
        // questionnaires permissions
        Permission::create(['name' => 'list questionnaires']);
        Permission::create(['name' => 'create questionnaires']);
        Permission::create(['name' => 'update questionnaires']);
        Permission::create(['name' => 'delete questionnaires']);
    }
}

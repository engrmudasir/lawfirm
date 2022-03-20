<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_super_admin = Role::create(['name' => 'Super Admin']);
        $role = Role::create(['name' => 'Admin']);
        $role = Role::create(['name' => 'Manager']);
        DB::table('users')->insert([
            'name' => 'Super Admin',
            'email' => 'super@lawfirm.com',
            'password' => Hash::make('password'),
        ]);
        $user = User::whereEmail('super@lawfirm.com')->first();
        $user->assignRole('Super Admin');

    }
}

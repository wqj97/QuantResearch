<?php

use Illuminate\Database\Seeder;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run ()
    {
        \App\Role::create([
            'name' => '管理员'
        ]);
        \App\Role::create([
            'name' => '内部账号'
        ]);
        \App\Role::create([
            'name' => '企业用户'
        ]);
        \App\Role::create([
            'name' => '员工账号'
        ]);
        \App\Role::create([
            'name' => '个人用户'
        ]);
        \App\Role::create([
            'name' => '免费用户'
        ]);
    }
}

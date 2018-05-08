<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run ()
    {
        \App\User::create([
            'email' => 'wqj97@126.com',
            'password' => bcrypt('wqj9705'),
            'api_token' => str_random(40),
            'phone' => '13347320707',
            'name' => '万千钧'
        ]);
    }
}

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
            'api_token' => 'efZu8H8nWsN0w63i4dxWlimyWlDtr4DCLiuc6ei0',
            'phone' => '13347320707',
            'name' => '万千钧'
        ]);

        \App\User::create([
            'email' => '1@1.com',
            'password' => bcrypt('1'),
            'api_token' => str_random(40),
            'phone' => '1',
            'name' => '1'
        ]);
    }
}

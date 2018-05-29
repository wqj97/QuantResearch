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
    }
}

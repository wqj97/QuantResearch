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
            'email' => '634686592@qq.com',
            'password' => bcrypt('13803067615'),
            'api_token' => 'Pn3yyk6JNU9FjPZCgdWlmUupSWdGuTL3xkRIalHc',
            'phone' => '‭13803067615',
            'name' => '高万贤'
        ]);

        \App\User::create([
            'email' => '905361093@qq.com',
            'password' => bcrypt('13116120620'),
            'api_token' => 'rVcjBlAn1TxfUBnUTLbEjZDkYaroPLKvJ445OppF',
            'phone' => '13116120620',
            'name' => '孙光浩'
        ]);

        \App\User::find(1)->roles()->attach([1, 2]);
        \App\User::find(2)->roles()->attach([1, 2]);
        \App\User::find(3)->roles()->attach([1, 2]);
    }
}

<?php

use Illuminate\Database\Seeder;

class ProductConfigSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run ()
    {
        \App\ProductConfig::create([
            'user_id' => 1,
            'code' => ['rb1901', 'hc1902'],
            'config' => [
                'selfSelected' => true,
                'deposit' => 8,
                'amount' => 100000
            ]
        ]);
    }
}

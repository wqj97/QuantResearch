<?php

use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run ()
    {
        \App\Product::create([
            'name' => '螺纹/热卷',
            'stableCoefficient' => 64,
            'code' => ['rb', 'hc'],
            'names' => ['螺纹', '热卷', '螺纹 / 热卷'],
            'product1_month' => [1, 5, 10],
            'product2_month' => [1, 5, 10],
            'openPosition' => [0.91, 1.1],
            'unit' => [10, 10]
        ]);
    }
}

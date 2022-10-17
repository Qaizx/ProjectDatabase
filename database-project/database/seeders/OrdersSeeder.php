<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrdersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \Eloquent::unguard();

        $path = 'database\SQL\orders.sql';
        \DB::unprepared(file_get_contents($path));

        $this->command->info('orders seeded !');
    }
}

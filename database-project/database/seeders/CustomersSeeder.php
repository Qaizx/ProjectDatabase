<?php

namespace Database\Seeders;

use App\Models\customers;
use Database\Factories\CustomersFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CustomersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


        \Eloquent::unguard();

        $path = 'database\SQL\customers.sql';
        \DB::unprepared(file_get_contents($path));

        $this->command->info('customers seeded!');
        //
    }
}

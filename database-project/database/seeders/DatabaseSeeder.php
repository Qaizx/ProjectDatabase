<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            CustomersSeeder::class,
            UsersSeeder::class,
            EmployeesSeeder::class,
            OfficesSeeder::class,
            ProductsSeeder::class,
            OrdersSeeder::class,
            OrderdetailsSeeder::class,
            PaymentsSeeder::class,
            ProductlinesSeeder::class
        ]);
        

    }
}

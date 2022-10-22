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
            OfficesSeeder::class,
            EmployeesSeeder::class,
            UsersSeeder::class,
            CustomersSeeder::class,
            PaymentsSeeder::class,
            ProductlinesSeeder::class,
            ProductsSeeder::class,
            OrdersSeeder::class,
            OrderdetailsSeeder::class,
        ]);
        

    }
}

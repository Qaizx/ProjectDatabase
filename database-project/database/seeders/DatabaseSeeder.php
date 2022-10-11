<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Offices;
use App\Models\Orderdetails;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;

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
            UserSeeder::class,
            EmployeesSeeder::class,
            OfficesSeeder::class,
            OrderdetailsSeeder::class,
            OrdersSeeder::class,
            PaymentsSeeder::class,
            ProductlinesSeeder::class,
            ProductsSeeder::class
        ]);
        

    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OfficesSeeder extends Seeder
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

        $path = 'database\SQL\offices.sql';
        \DB::unprepared(file_get_contents($path));

        $this->command->info('offices seeded !');
    }
}

<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        $this->call(EventTypeSeeder::class);
        $this->call(ActivitySeeder::class);
        $this->call(UserSeeder::class);
        $this->call(EventSeeder::class);
        $this->call(CarSeeder::class);
        Schema::enableForeignKeyConstraints();
    }
}

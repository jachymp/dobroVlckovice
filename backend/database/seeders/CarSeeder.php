<?php

namespace Database\Seeders;

use App\Models\Car;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cars')->truncate();

        $cars_data = json_decode(file_get_contents(storage_path('car_basic_data.json')));

        foreach ($cars_data as $carData){
            $car = new Car();
            $car->name = $carData->name;
            $car->user_id = $carData->user_id;
            $car->capacity = $carData->capacity;
            $car->information = $carData->information;
            $car->save();
        }
    }
}

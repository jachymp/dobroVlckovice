<?php

namespace Database\Seeders;

use App\Models\Activity;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('activities')->truncate();

        $activity_data = json_decode(file_get_contents(storage_path('activity_basic_data.json')));

        foreach ($activity_data as $activityData){
            $activity = new Activity();
            $activity->name = $activityData->name;
            $activity->description = $activityData->description;
            $activity->capacity = $activityData->capacity;
            $activity->save();
        }
    }
}

<?php

namespace Database\Seeders;

use App\Models\EventType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('event_types')->truncate();

        $eventType_data = json_decode(file_get_contents(storage_path('eventType_basic_data.json')));

        foreach ($eventType_data as $eventTypeData){
            $eventType = new EventType();
            $eventType->name = $eventTypeData->name;
            $eventType->description = $eventTypeData->description;
            $eventType->save();
        }
    }
}

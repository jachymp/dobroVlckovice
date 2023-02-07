<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('events')->truncate();

        $events_data = json_decode(file_get_contents(storage_path('event_basic_data.json')));

        foreach ($events_data as $eventData){
            $event = new Event();
            $event->name = $eventData->name;
            $event->eventsType_id = $eventData->events_type_id;
            $event->from = $eventData->from;
            $event->to = $eventData->to;
            $event->description = $eventData->description;
            $event->capacity = $eventData->capacity;
            $event->save();
        }
    }
}

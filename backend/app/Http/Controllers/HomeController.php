<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    // get the closest event - json
    public function actualEvent()
    {
        $event = Event::with('activities')
            ->where('from', '>=', today())
            ->orderBy('id', 'asc')
            ->first();
        return $event;
    }

    // get another non-expired events - json
    public function nextEvents()
    {
        $firstEvent = Event::where('from', '>=', today())
            ->orderBy('id', 'asc')
            ->first();

        $nextEvents = Event::where('from', '>=', today())
            ->where('id', '!=', $firstEvent->id)
            ->orderBy('id', 'asc')
            ->get();

        return $nextEvents;
    }
}

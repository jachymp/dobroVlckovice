<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    // one event can have more users
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    // one event can have more activities
    public function activities()
    {
        return $this->belongsToMany(Activity::class, 'activity_event', 'event_id', 'activity_id');
    }

    // one event can have just one type
    public function eventType()
    {
        return $this->belongTo(EventType::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventType extends Model
{
    use HasFactory;

    // one type can be in more events
    public function events()
    {
        return $this->hasMany(Event::class);
    }
}

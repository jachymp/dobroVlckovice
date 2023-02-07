<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    // one activity can be in more events
    public function events()
    {
        return $this->belongsToMany(Event::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    protected $fillable = ['name','user_id','capacity','information'];

    // one car can have just one driver (owner)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

}

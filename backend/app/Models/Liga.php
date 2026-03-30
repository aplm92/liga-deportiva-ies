<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Partido;

class Liga extends Model
{
    use HasFactory;

    public function partidos()
    {
        return $this->hasMany(Partido::class);
    }
}


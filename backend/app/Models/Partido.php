<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Club;
use App\Models\Liga;

class Partido extends Model
{
    public function liga()
    {
        return $this->belongsTo(Liga::class);
    }

    public function clubLocal()
    {
        return $this->belongsTo(Club::class, 'club_local_id');
    }

    public function clubVisitante()
    {
        return $this->belongsTo(Club::class, 'club_visitante_id');
    }
}


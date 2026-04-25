<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partido extends Model
{
    use HasFactory;

    protected $fillable = [
        'liga_id',
        'club_local_id',
        'club_visitante_id',
        'arbitro_id',
        'fecha',
        'resultado_local',
        'resultado_visitante',
        'estado'
    ];

    protected $with = [
        'liga',
        'clubLocal',
        'clubVisitante',
        'arbitro'
    ];

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

    public function arbitro()
    {
        return $this->belongsTo(User::class, 'arbitro_id');
    }
}
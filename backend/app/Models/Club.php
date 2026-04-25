<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Jugador;

class Club extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'ciudad',
        'categoria',
        'competicion',
        'capitan',
        'totalJugadores',
        'partidosJugados',
        'partidosGanados',
        'partidosEmpatados',
        'partidosPerdidos'
    ];

    public function jugadores()
    {
        return $this->hasMany(Jugador::class);
    }
}

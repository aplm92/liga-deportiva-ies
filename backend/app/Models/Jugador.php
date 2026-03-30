<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Club;

class Jugador extends Model
{
    use HasFactory;

    protected $table = 'jugadores';

    protected $fillable = [
        'nombre',
        'posicion',
        'dorsal',
        'club_id'
    ];

    public function club()
    {
        return $this->belongsTo(Club::class);
    }
}

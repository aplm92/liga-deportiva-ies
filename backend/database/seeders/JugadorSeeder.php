<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Jugador;

class JugadorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Jugador::create([
        'nombre' => 'Juan Pérez',
        'posicion' => 'Delantero',
        'dorsal' => 9,
        'club_id' => 1
    ]);

    Jugador::create([
        'nombre' => 'Luis Gómez',
        'posicion' => 'Portero',
        'dorsal' => 1,
        'club_id' => 1
    ]);
    }
}

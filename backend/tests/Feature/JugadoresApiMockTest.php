<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Jugador;
use App\Models\Club;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;

class JugadoresApiMockTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function devuelve_api_jugadores_mockeada()
    {
        // Crear un club porque la factory de Jugador lo necesita
        $club = Club::factory()->create();

        // Crear 3 jugadores mockeados
        Jugador::factory()->count(3)->create([
            'nombre' => 'Pepe',
            'posicion' => 'Delantero',
            'dorsal' => 29,
            'club_id' => $club->id,
        ]);

        // Llamar a la API
        $response = $this->get('/api/jugadores');

        // Comprobaciones
        $response->assertStatus(200)
                 ->assertJsonCount(3)
                 ->assertJsonFragment(['nombre' => 'Pepe']);
    }
}

<?php

namespace Tests\Feature;

use App\Models\Club;
use App\Models\Jugador;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class JugadoresApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_devuelve_lista_de_jugadores_con_equipo_y_competicion(): void
    {
        $club = Club::factory()->create([
            'nombre' => 'Club Test',
            'competicion' => 'Primera',
        ]);

        Jugador::factory()->create([
            'nombre' => 'Brian Doyle',
            'posicion' => 'Portero',
            'dorsal' => 42,
            'club_id' => $club->id,
        ]);

        $response = $this->getJson('/api/jugadores');

        $response->assertStatus(200)
            ->assertJsonStructure([
                '*' => [
                    'id',
                    'nombre',
                    'posicion',
                    'dorsal',
                    'equipo',
                    'competicion',
                ]
            ]);
    }

    public function test_el_json_devuelto_contiene_equipo_y_competicion(): void
    {
        $club = Club::factory()->create([
            'nombre' => 'Club Test',
            'competicion' => 'Primera',
        ]);

        Jugador::factory()->create([
            'nombre' => 'Brian Doyle',
            'posicion' => 'Portero',
            'dorsal' => 42,
            'club_id' => $club->id,
        ]);

        $response = $this->getJson('/api/jugadores');

        $response->assertStatus(200)
            ->assertJsonFragment([
                'equipo' => 'Club Test',
            ])
            ->assertJsonFragment([
                'competicion' => 'Primera',
            ]);
    }
}
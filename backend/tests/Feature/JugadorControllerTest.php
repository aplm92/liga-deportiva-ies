<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Jugador;
use App\Models\Club;
use Illuminate\Foundation\Testing\RefreshDatabase;

class JugadorControllerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function puede_listar_jugadores()
    {
        $club = Club::factory()->create();
        Jugador::factory()->count(3)->create(['club_id' => $club->id]);

        $response = $this->get('/api/jugadores');

        $response->assertStatus(200)
                 ->assertJsonCount(3)
                 ->assertJsonStructure([
                     '*' => ['id', 'nombre', 'posicion', 'dorsal', 'club']
                 ]);
    }

    /** @test */
    public function puede_crear_un_jugador_correctamente()
    {
        $club = Club::factory()->create();

        $data = [
            'nombre' => 'Juan Pérez',
            'posicion' => 'Delantero',
            'dorsal' => 9,
            'club_id' => $club->id
        ];

        $response = $this->post('/api/jugadores', $data);

        $response->assertStatus(201);
        $this->assertDatabaseHas('jugadores', $data);
    }

    /** @test */
    public function no_puede_crear_un_jugador_con_datos_invalidos()
    {
        $response = $this->post('/api/jugadores', []);

        $response->assertStatus(302); // Laravel redirige por validación
        $response->assertSessionHasErrors(['nombre', 'posicion', 'dorsal', 'club_id']);
    }
}

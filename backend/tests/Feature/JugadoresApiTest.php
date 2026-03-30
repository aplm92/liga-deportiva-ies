<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Jugador;
use App\Models\Club;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;

class JugadoresApiTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function devuelve_lista_de_jugadores_con_su_club()
    {
        $club = Club::factory()->create();
        Jugador::factory()->count(3)->create(['club_id' => $club->id]);

        $response = $this->get('/api/jugadores');

        $response->assertStatus(200)
                 ->assertJsonCount(3)
                 ->assertJsonStructure([
                     '*' => [
                         'id',
                         'nombre',
                         'posicion',
                         'dorsal',
                         'club' => [
                             'id',
                             'nombre',
                             'ciudad',
                             'categoria'
                         ]
                     ]
                 ]);
    }

    #[Test]
    public function devuelve_lista_vacia_si_no_hay_jugadores()
    {
        $response = $this->get('/api/jugadores');

        $response->assertStatus(200)
                 ->assertExactJson([]);
    }

    #[Test]
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

        $response->assertStatus(201)
                 ->assertJsonFragment([
                     'nombre' => 'Juan Pérez',
                     'posicion' => 'Delantero',
                     'dorsal' => 9,
                     'club_id' => $club->id
                 ]);

        $this->assertDatabaseHas('jugadores', $data);
    }

    #[Test]
    public function no_puede_crear_un_jugador_con_datos_invalidos()
    {
        $response = $this->post('/api/jugadores', []);

        $response->assertStatus(302);
        $response->assertSessionHasErrors(['nombre', 'posicion', 'dorsal', 'club_id']);
    }

    #[Test]
    public function no_puede_crear_un_jugador_con_un_club_inexistente()
    {
        $data = [
            'nombre' => 'Jugador X',
            'posicion' => 'Defensa',
            'dorsal' => 5,
            'club_id' => 9999
        ];

        $response = $this->post('/api/jugadores', $data);

        $response->assertStatus(302);
        $response->assertSessionHasErrors(['club_id']);
    }

    #[Test]
    public function el_json_devuelto_contiene_el_club_completo()
    {
        $club = Club::factory()->create([
            'nombre' => 'Club Test',
            'ciudad' => 'Ciudad Test',
            'categoria' => 'Primera'
        ]);

        $jugador = Jugador::factory()->create(['club_id' => $club->id]);

        $response = $this->get('/api/jugadores');

        $response->assertStatus(200)
                 ->assertJsonFragment([
                     'nombre' => 'Club Test',
                     'ciudad' => 'Ciudad Test',
                     'categoria' => 'Primera'
                 ]);
    }
}

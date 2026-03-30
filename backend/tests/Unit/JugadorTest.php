<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Jugador;
use App\Models\Club;
use Illuminate\Foundation\Testing\RefreshDatabase;

use PHPUnit\Framework\Attributes\Test;

class JugadorTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function un_jugador_pertenece_a_un_club()
    {
        $club = Club::factory()->create();
        $jugador = Jugador::factory()->create([
            'club_id' => $club->id
        ]);

        $this->assertInstanceOf(Club::class, $jugador->club);
        $this->assertEquals($club->id, $jugador->club->id);
    }

    #[Test]
    public function un_jugador_tiene_los_campos_rellenables_correctos()
    {
        $jugador = new Jugador();

        $this->assertEquals([
            'nombre',
            'posicion',
            'dorsal',
            'club_id'
        ], $jugador->getFillable());
    }
}
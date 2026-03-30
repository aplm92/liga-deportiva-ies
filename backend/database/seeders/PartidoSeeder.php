<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Partido;

class PartidoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Partido::create([
        'liga_id' => 1,
        'club_local_id' => 1,
        'club_visitante_id' => 2,
        'fecha' => '2025-11-15',
        'resultado' => '2-1'
    ]);
    }
}

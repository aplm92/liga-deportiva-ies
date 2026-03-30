<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Club;

class ClubSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Club::create([
        'nombre' => 'CD Maestre',
        'ciudad' => 'Ciudad Real',
        'categoria' => 'Senior'
    ]);

    Club::create([
        'nombre' => 'Atlético Calatrava',
        'ciudad' => 'Almagro',
        'categoria' => 'Senior'
    ]);

    Club::create([
        'nombre' => 'UD Daimiel',
        'ciudad' => 'Daimiel',
        'categoria' => 'Juvenil'
    ]);
    }
}

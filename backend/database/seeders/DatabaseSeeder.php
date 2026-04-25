<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Seeder de usuarios (opcional)
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('password'),
            'tipo' => 'User',
        ]);
        // Seeders del proyecto Liga Deportiva
        $this->call([
            ClubSeeder::class,
            JugadorSeeder::class,
            LigaSeeder::class,
            PartidoSeeder::class,
        ]);
    }
}

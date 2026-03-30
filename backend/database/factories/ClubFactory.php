<?php

namespace Database\Factories;

use App\Models\Club;
use Illuminate\Database\Eloquent\Factories\Factory;

class ClubFactory extends Factory
{
    protected $model = Club::class;

    public function definition()
    {
        return [
            'nombre' => $this->faker->company(),
            'ciudad' => $this->faker->city(),
            'categoria' => $this->faker->randomElement(['Primera', 'Segunda', 'Juvenil', 'Cadete']),
        ];
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserController extends Controller
{
    // Obtener árbitros
    public function arbitros()
    {
        return User::where('tipo', 'arbitro')
            ->get()
            ->map(function ($u) {
                return [
                    'id' => $u->id,
                    'nombre' => $u->name,
                    'email' => $u->email,

                    // puedes mejorar esto después
                    'competicion' => 'General',
                    'experiencia' => 0,
                    'categoria' => 'Árbitro',
                    'partidosArbitrados' => 0
                ];
            });
    }

    // (opcional) todos los usuarios
    public function index()
    {
        return User::all();
    }
}
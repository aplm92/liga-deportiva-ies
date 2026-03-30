<?php

namespace App\Http\Controllers;

use App\Models\Jugador;
use Illuminate\Http\Request;

class JugadorController extends Controller
{
    public function index()
    {
        return Jugador::with('club')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'posicion' => 'required',
            'dorsal' => 'required|integer',
            'club_id' => 'required|exists:clubs,id'
        ]);

        return Jugador::create($request->only([
        'nombre',
        'posicion',
        'dorsal',
        'club_id'
    ]));
    }
}

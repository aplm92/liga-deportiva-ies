<?php

namespace App\Http\Controllers;

use App\Models\Liga;
use Illuminate\Http\Request;

class LigaController extends Controller
{
    public function index()
    {
        return Liga::with('partidos')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'deporte' => 'required',
            'temporada' => 'required'
        ]);

        return Liga::create($request->all());
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Club;
use Illuminate\Http\Request;

class ClubController extends Controller
{
    public function index()
    {
        return Club::all();
    }

    public function show($id)
    {
        return Club::findOrFail($id);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'ciudad' => 'required',
            'categoria' => 'required',
            'competicion' => 'required',
            'capitan' => 'required'
        ]);

        return Club::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $club = Club::findOrFail($id);
        $club->update($request->all());
        return $club;
    }

    public function destroy($id)
    {
        Club::destroy($id);
        return response()->json(['mensaje' => 'Club eliminado']);
    }
}

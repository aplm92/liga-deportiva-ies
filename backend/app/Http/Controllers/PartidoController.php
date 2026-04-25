<?php

namespace App\Http\Controllers;

use App\Models\Partido;
use Illuminate\Http\Request;

class PartidoController extends Controller
{
    // LISTAR TODOS
    public function index()
{
    return Partido::with([
        'liga',
        'clubLocal',
        'clubVisitante',
        'arbitro'
    ])->get();
}

public function store(Request $request)
{
    $data = $request->validate([
        'liga_id' => 'required|integer',
        'club_local_id' => 'required|integer',
        'club_visitante_id' => 'required|integer',
        'arbitro_id' => 'nullable|integer',
        'fecha' => 'required|date'
    ]);

    $data['estado'] = 'pendiente';

    // IMPORTANTE: nuevos campos reales
    $data['resultado_local'] = null;
    $data['resultado_visitante'] = null;

    return Partido::create($data);
}

public function update(Request $request, $id)
{
    $partido = Partido::findOrFail($id);

    $data = $request->validate([
        'liga_id' => 'sometimes|integer',
        'club_local_id' => 'sometimes|integer',
        'club_visitante_id' => 'sometimes|integer',
        'arbitro_id' => 'nullable|integer',
        'fecha' => 'sometimes|date',
        'resultado_local' => 'nullable|integer',
        'resultado_visitante' => 'nullable|integer',
        'estado' => 'sometimes|string'
    ]);

    $partido->update($data);

    return $partido->load([
        'liga',
        'clubLocal',
        'clubVisitante',
        'arbitro'
    ]);
}

    // ELIMINAR
    public function destroy($id)
    {
        $partido = Partido::findOrFail($id);
        $partido->delete();

        return response()->json([
            'mensaje' => 'Partido eliminado correctamente'
        ]);
    }
}
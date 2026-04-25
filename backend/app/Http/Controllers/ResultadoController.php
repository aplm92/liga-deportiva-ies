<?php

namespace App\Http\Controllers;

use App\Models\Partido;
use Illuminate\Validation\Rule;

class ResultadoController extends Controller
{
    public function index()
    {
        return Partido::with(['clubLocal', 'clubVisitante', 'liga', 'arbitro'])
            ->get()
            ->map(function ($p) {

                $resultado = explode('-', $p->resultado ?? '0-0');

                return [
                    'id' => $p->id,
                    'competicion' => $p->liga?->nombre ?? 'Sin liga',
                    'jornada' => $p->jornada ?? 1,
                    'fecha' => $p->fecha,

                    'equipoLocal' => $p->clubLocal?->nombre ?? 'Local',
                    'equipoVisitante' => $p->clubVisitante?->nombre ?? 'Visitante',

                    'resultado' => $p->resultado,

                    'golesLocal' => $resultado[0] ?? 0,
                    'golesVisitante' => $resultado[1] ?? 0,

                    'arbitro' => $p->arbitro?->name ?? 'Sin árbitro',
                ];
            });
    }
}
export interface Partido {
  id?: number;

  liga_id?: number;
  club_local_id?: number;
  club_visitante_id?: number;
  arbitro_id?: number | null;

  fecha: string;

  // RESULTADOS SEPARADOS (como en Laravel)
  resultado_local?: number;
  resultado_visitante?: number;

  estado?: string;

  // ======================
  // RELACIONES (Laravel)
  // ======================

  liga?: {
    id: number;
    nombre: string;
  };

  // IMPORTANTE: snake_case
  club_local?: {
    id: number;
    nombre: string;
  };

  club_visitante?: {
    id: number;
    nombre: string;
  };

  arbitro?: {
    id: number;
    name: string;
  };
}
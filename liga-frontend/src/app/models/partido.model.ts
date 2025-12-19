export interface Partido {
  _id?: string;
  deporte: string;
  equipoLocal: string;
  equipoVisitante: string;
  arbitroId: string;
  fecha: string; // o Date
  ubicacion: string;
  resultadoLocal?: number | null;
  resultadoVisitante?: number | null;
  estado: 'pendiente' | 'finalizado' | 'revision';
}

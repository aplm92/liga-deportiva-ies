export interface Jugador {
  nombre: string;
  equipo: string;
  competicion: string;
  posicion: string;
  numero: number;
  edad: number;
  partidosJugados: number;
  goles?: number;
  asistencias?: number;
  paradas?: number;
  golesRecibidos?: number;
  tarjetasAmarillas?: number;
  tarjetasRojas?: number;
  puntos?: number;
  rebotes?: number;
  sets?: number;
  victorias?: number;
  derrotas?: number;
  setsGanados?: number;
  setsPerdidos?: number;
  medallasOro?: number;
  medallasPlata?: number;
  medallasBronce?: number;
  mejorTiempo?: string;
  email: string;
}

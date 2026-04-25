export interface Club {
  id: number;
  nombre: string;
  ciudad: string;
  categoria: string;
  competicion: string;
  capitan: string;
  totalJugadores: number;
  partidosJugados: number;
  partidosGanados: number;
  partidosEmpatados: number;
  partidosPerdidos: number;
}
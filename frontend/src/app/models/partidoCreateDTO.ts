export interface PartidoCreateDTO {
  liga_id: number;
  club_local_id: number;
  club_visitante_id: number;
  arbitro_id: number;
  fecha: string;
}
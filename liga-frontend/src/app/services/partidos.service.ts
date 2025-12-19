import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partido } from '../models/partido.model';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  private baseUrl = 'http://localhost:3000/api/partidos';

  constructor(private http: HttpClient) {}

  /** Todos los partidos */
  getPartidos(): Observable<Partido[]> {
    return this.http.get<Partido[]>(this.baseUrl);
  }

  /** Partidos de un equipo (local o visitante) */
  partidosEquipo(equipo: string): Observable<Partido[]> {
    const url = `${this.baseUrl}/equipo/${encodeURIComponent(equipo)}`;
    return this.http.get<Partido[]>(url);
  }

  /** Partidos asignados a un árbitro */
  partidosArbitro(arbitroId: string): Observable<Partido[]> {
    const url = `${this.baseUrl}/arbitro/${encodeURIComponent(arbitroId)}`;
    return this.http.get<Partido[]>(url);
  }

  /** Enviar resultado (capitán) */
  enviarResultado(partidoId: string, resultadoLocal: number, resultadoVisitante: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/${partidoId}/resultado`, { resultadoLocal, resultadoVisitante });
  }

  /** Actualizar partido (admin o árbitro) */
  actualizarPartido(partidoId: string, partido: Partido): Observable<Partido> {
    return this.http.put<Partido>(`${this.baseUrl}/${partidoId}`, partido);
  }

  /** Crear un nuevo partido (admin) */
  crearPartido(partido: Partido): Observable<Partido> {
  return this.http.post<Partido>(this.baseUrl, partido);
  }

}

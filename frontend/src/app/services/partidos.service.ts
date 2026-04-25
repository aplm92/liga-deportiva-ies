import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partido } from '../models/partido.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  private baseUrl = `${environment.apiUrl}/partidos`;

  constructor(private http: HttpClient) {}

  /** TODOS LOS PARTIDOS */
  getPartidos(): Observable<Partido[]> {
    return this.http.get<Partido[]>(this.baseUrl);
  }

  /** PARTIDOS POR EQUIPO */
  partidosEquipo(equipo: string): Observable<Partido[]> {
    return this.http.get<Partido[]>(
      `${this.baseUrl}/equipo/${encodeURIComponent(equipo)}`
    );
  }

  /** PARTIDOS POR ÁRBITRO */
  partidosArbitro(arbitroId: number | string): Observable<Partido[]> {
    return this.http.get<Partido[]>(
      `${this.baseUrl}/arbitro/${encodeURIComponent(String(arbitroId))}`
    );
  }

  /** CREAR PARTIDO (ADMIN) */
  crearPartido(data: Partial<Partido>): Observable<Partido> {
    return this.http.post<Partido>(this.baseUrl, data);
  }

  /** ACTUALIZAR PARTIDO */
  actualizarPartido(id: number, data: Partial<Partido>): Observable<Partido> {
    return this.http.put<Partido>(`${this.baseUrl}/${id}`, data);
  }

  /** ENVIAR RESULTADO */
  enviarResultado(id: number, resultado: string): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/${id}/resultado`,
      { resultado }
    );
  }
}
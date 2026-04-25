import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  private baseUrl = `${environment.apiUrl}/jugadores`;

  constructor(private http: HttpClient) {}

  getJugadores(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(this.baseUrl);
  }

  crearJugador(jugador: Jugador): Observable<Jugador> {
    return this.http.post<Jugador>(this.baseUrl, jugador);
  }
}

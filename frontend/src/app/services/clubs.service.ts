import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

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

@Injectable({
  providedIn: 'root'
})
export class ClubsService {

  private baseUrl = `${environment.apiUrl}/clubs`;

  constructor(private http: HttpClient) {}

  getClubs(): Observable<Club[]> {
    return this.http.get<Club[]>(this.baseUrl);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  private url = 'http://127.0.0.1:8000/api/partidos';

  constructor(private http: HttpClient) {}

  getResultados(): Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe(
      map(resultados => (resultados ?? []).map(r => ({

        // normalización defensiva
        id: r.id,

        liga: r.liga ?? null,
        clubLocal: r.clubLocal ?? r.club_local ?? null,
        clubVisitante: r.clubVisitante ?? r.club_visitante ?? null,

        resultado_local: r.resultado_local ?? null,
        resultado_visitante: r.resultado_visitante ?? null,

        fecha: r.fecha ?? null,
        arbitro: r.arbitro ?? null

      })))
    );
  }
}
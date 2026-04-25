import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Arbitro } from '../models/arbitro.model';

@Injectable({
  providedIn: 'root'
})
export class ArbitroService {

  private url = 'http://127.0.0.1:8000/api/arbitros';

  constructor(private http: HttpClient) {}

  getArbitros(): Observable<Arbitro[]> {
    return this.http.get<Arbitro[]>(this.url);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Usuario {
  _id?: number;
  nombre: string;
  email: string;
  tipo: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = `${environment.apiUrl}/usuarios`;

  constructor(private http: HttpClient) {}

  register(nombre: string, email: string, password: string, tipo: string): Observable<Usuario> {
    console.log({ nombre, email, password, tipo }); // 👈 IMPORTANTE
    return this.http.post<Usuario>(`${this.baseUrl}/register`, { nombre, email, password, tipo });
  }

  login(email: string, password: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}/login`, { email, password });
  }
}

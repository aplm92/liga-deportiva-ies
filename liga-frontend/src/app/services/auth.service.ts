import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  _id?: string;
  nombre: string;
  email: string;
  tipo: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) {}

  register(nombre: string, email: string, password: string, tipo: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}/register`, { nombre, email, password, tipo });
  }

  login(email: string, password: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}/login`, { email, password });
  }
}

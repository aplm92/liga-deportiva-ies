import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

import { JugadorService } from './jugador.service';
import { Jugador } from '../models/jugador.model';

describe('JugadorService (Integración HTTP)', () => {
  let service: JugadorService;
  let httpMock: HttpTestingController;

  const mockJugadores: Jugador[] = [
    { nombre: 'Marta', posicion: 'Lateral', numero: 9, equipo: 'Las Guerreras', competicion: 'Liga Nacional', edad: 25, partidosJugados: 10, email: 'marta@example.com' },
    { nombre: 'Pedro', posicion: 'Portero', numero: 1, equipo: 'Los Hispanos', competicion: 'Liga Nacional', edad: 27, partidosJugados: 12, email: 'pedro@example.com' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JugadorService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(JugadorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debe obtener la lista de jugadores (GET)', () => {
    service.getJugadores().subscribe(jugadores => {
      expect(jugadores.length).toBe(2);
      expect(jugadores).toEqual(mockJugadores);
    });

    const req = httpMock.expectOne('http://127.0.0.1:8000/api/jugadores');
    expect(req.request.method).toBe('GET');

    req.flush(mockJugadores);
  });

  it('debe crear un jugador correctamente (POST)', () => {
    const nuevoJugador: Jugador = {
      nombre: 'Luis',
      posicion: 'Defensa',
      numero: 4,
      equipo: 'Caserio',
      competicion: 'Liga Nacional',
      edad: 28,
      partidosJugados: 15,
      email: 'luis@example.com'
    };

    service.crearJugador(nuevoJugador).subscribe(jugador => {
      expect(jugador).toEqual(nuevoJugador);
    });

    const req = httpMock.expectOne('http://127.0.0.1:8000/api/jugadores');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(nuevoJugador);

    req.flush(nuevoJugador);
  });

  it('debe manejar errores del servidor', () => {
    service.getJugadores().subscribe({
      next: () => fail('La petición debería fallar'),
      error: (error) => {
        expect(error.status).toBe(500);
      }
    });

    const req = httpMock.expectOne('http://127.0.0.1:8000/api/jugadores');
    req.flush('Error interno', { status: 500, statusText: 'Server Error' });
  });
});

function fail(message: string): never {
  throw new Error(message);
}

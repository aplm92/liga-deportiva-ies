import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Jugadores } from './jugadores';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Jugadores', () => {
  let component: Jugadores;
  let fixture: ComponentFixture<Jugadores>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [Jugadores]
    }).compileComponents();

    fixture = TestBed.createComponent(Jugadores);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    fixture.detectChanges();

    const req = httpMock.expectOne('http://127.0.0.1:8000/api/jugadores');
    req.flush([]); // respuesta mock

    expect(component).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify(); // asegura que no quedan peticiones pendientes
  });
});
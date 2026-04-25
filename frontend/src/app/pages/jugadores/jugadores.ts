import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { JugadorService } from '../../services/jugador.service';
import { Jugador } from '../../models/jugador.model';

@Component({
  selector: 'app-jugadores',
  standalone: false,
  templateUrl: './jugadores.html',
  styleUrls: ['./jugadores.scss']
})
export class Jugadores implements OnInit {

  filtroCompeticion: string = '';
  filtroEquipo: string = '';
  busqueda: string = '';

  jugadores: Jugador[] = [];
  jugadorDetalle?: Jugador;

  constructor(
    private jugadorService: JugadorService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.cargarJugadores();
  }

  cargarJugadores(): void {
    this.jugadorService.getJugadores().subscribe({
      next: (data) => {
        console.log('JUGADORES API:', data);

        this.jugadores = data;

        //FORZAR REFRESCO
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error cargando jugadores', err);
      }
    });
  }

  get jugadoresFiltrados(): Jugador[] {
    return this.jugadores.filter(jugador => {

      const coincideCompeticion =
        !this.filtroCompeticion ||
        jugador.competicion?.toLowerCase().includes(this.filtroCompeticion.toLowerCase());

      const coincideEquipo =
        !this.filtroEquipo ||
        jugador.equipo?.toLowerCase().includes(this.filtroEquipo.toLowerCase());

      const coincideNombre =
        !this.busqueda ||
        jugador.nombre?.toLowerCase().includes(this.busqueda.toLowerCase());

      return coincideCompeticion && coincideEquipo && coincideNombre;
    });
  }

  mostrarDetalle(jugador: Jugador) {
    this.jugadorDetalle = jugador;

    const modalEl = document.getElementById('modalDetalleJugador');
    if (modalEl) {
      const modal = new (window as any).bootstrap.Modal(modalEl);
      modal.show();
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../services/jugador.service';
import { Jugador } from '../../models/jugador.model';

@Component({
  selector: 'app-jugadores',
  standalone: false,
  templateUrl: './jugadores.html',
  styleUrls: ['./jugadores.scss']
})
export class Jugadores implements OnInit {

  // Restauramos filtros
  filtroCompeticion: string = '';
  filtroEquipo: string = '';
  busqueda: string = '';

  // Ahora jugadores viene de la API
  jugadores: Jugador[] = [];

  jugadorDetalle?: Jugador;

  constructor(private jugadorService: JugadorService) {}

  ngOnInit(): void {
  // Resetear filtros al entrar en la página
  this.filtroCompeticion = '';
  this.filtroEquipo = '';
  this.busqueda = '';

  this.jugadorService.getJugadores().subscribe(data => {
    this.jugadores = data;
  });
}


  // Restauramos getter de filtrado, adaptado a array
  get jugadoresFiltrados(): Jugador[] {
  return this.jugadores.filter(jugador => {
    const coincideCompeticion =
      !this.filtroCompeticion ||
      jugador.competicion.toLowerCase().includes(this.filtroCompeticion.toLowerCase());

    const coincideEquipo =
      !this.filtroEquipo ||
      jugador.equipo.toLowerCase().includes(this.filtroEquipo.toLowerCase());

    const coincideNombre =
      !this.busqueda ||
      jugador.nombre.toLowerCase().includes(this.busqueda.toLowerCase());

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

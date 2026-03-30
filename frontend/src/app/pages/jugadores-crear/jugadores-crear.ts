import { Component } from '@angular/core';
import { JugadorService } from '../../services/jugador.service';
import { Router } from '@angular/router';
import { Jugador } from '../../models/jugador.model';

@Component({
  selector: 'app-jugadores-crear',
  standalone: false,
  templateUrl: './jugadores-crear.html',
  styleUrl: './jugadores-crear.scss',
})
export class JugadoresCrear {
  jugador: any = {};

    constructor(private jugadorService: JugadorService, private router: Router) {}

    crearJugador() {
      this.jugadorService.crearJugador(this.jugador).subscribe(() => {
        this.router.navigate(['/jugadores']);
      });
    }
}

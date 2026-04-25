import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PartidosService } from '../../services/partidos.service';
import { Partido } from '../../models/partido.model';

@Component({
  selector: 'app-lista-partidos',
  templateUrl: './lista-partidos.component.html',
  styleUrls: ['./lista-partidos.component.scss'],
  standalone: false
})
export class ListaPartidosComponent implements OnInit {

  partidos: Partido[] = [];
  usuario: any;
  cargando = true;

  constructor(
    private partidosService: PartidosService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    const usuarioStorage = localStorage.getItem('usuario');

    if (!usuarioStorage) {
      this.cargando = false;
      return;
    }

    this.usuario = JSON.parse(usuarioStorage);

    if (!this.usuario?.equipo && this.usuario?.tipo !== 'arbitro') {
      this.partidos = [];
      this.cargando = false;
      return;
    }

    this.cargarPartidos();
  }

  cargarPartidos(): void {

    this.cargando = true;

    if (this.usuario.tipo === 'capitan' || this.usuario.tipo === 'normal') {

      this.partidosService.partidosEquipo(this.usuario.equipo)
        .subscribe({
          next: (data: Partido[]) => {
            this.partidos = data ?? [];
            this.cargando = false;
            this.cd.detectChanges();
          },
          error: (err) => {
            console.error(err);
            this.partidos = [];
            this.cargando = false;
          }
        });

    } else if (this.usuario.tipo === 'arbitro') {

      this.partidosService.partidosArbitro(this.usuario.id)
        .subscribe({
          next: (data: Partido[]) => {
            this.partidos = data ?? [];
            this.cargando = false;
            this.cd.detectChanges();
          },
          error: (err) => {
            console.error(err);
            this.partidos = [];
            this.cargando = false;
          }
        });

    } else {

      this.partidosService.getPartidos()
        .subscribe({
          next: (data: Partido[]) => {
            this.partidos = data ?? [];
            this.cargando = false;
            this.cd.detectChanges();
          },
          error: () => {
            this.partidos = [];
            this.cargando = false;
          }
        });
    }
  }

  // enviar resultado correcto
  enviarResultado(partido: Partido): void {

    if (
      partido.resultado_local == null ||
      partido.resultado_visitante == null
    ) {
      alert('Introduce ambos resultados');
      return;
    }

    const payload = {
      resultado_local: partido.resultado_local,
      resultado_visitante: partido.resultado_visitante,
      estado: 'finalizado'
    };

    this.partidosService.actualizarPartido(partido.id!, payload)
      .subscribe({
        next: () => this.cargarPartidos(),
        error: (err) => console.error(err)
      });
  }
}
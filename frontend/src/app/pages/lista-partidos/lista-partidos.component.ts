import { Component, OnInit } from '@angular/core';
import { PartidosService } from '../../services/partidos.service';
import { Partido } from '../../models/partido.model';
import { ChangeDetectorRef } from '@angular/core';

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

  constructor(private partidosService: PartidosService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    const usuarioStorage = localStorage.getItem('usuario');
    if (!usuarioStorage) {
      this.cargando = false;
      return;
    }

    this.usuario = JSON.parse(usuarioStorage);
    console.log('Usuario cargado:', this.usuario);

    if (!this.usuario.equipo && this.usuario.tipo !== 'arbitro') {
      this.partidos = [];
      this.cargando = false;
      return;
    }

    this.cargarPartidos();
  }

  cargarPartidos(): void {
    this.cargando = true;

    // Capitanes y usuarios normales ven los partidos de su equipo
    if (this.usuario.tipo === 'capitan' || this.usuario.tipo === 'normal') {
      this.partidosService.partidosEquipo(this.usuario.equipo)
        .subscribe({
          next: (data: Partido[]) => {
            console.log('Partidos recibidos:', data);
            this.partidos = Array.isArray(data) ? data : [];
            this.cargando = false;
            this.cd.detectChanges();
          },
          error: (err) => {
            console.error('Error cargando partidos', err);
            this.partidos = [];
            this.cargando = false;
          }
        });
    }

    // Árbitros ven los partidos que les corresponden
    else if (this.usuario.tipo === 'arbitro') {
      this.partidosService.partidosArbitro(this.usuario._id)
        .subscribe({
          next: (data: Partido[]) => {
            console.log('Partidos de árbitro recibidos:', data);
            this.partidos = Array.isArray(data) ? data : [];
            this.cargando = false;
            this.cd.detectChanges();
          },
          error: (err) => {
            console.error('Error cargando partidos de árbitro', err);
            this.partidos = [];
            this.cargando = false;
          }
        });
    }

    // Admin u otros
    else {
      this.partidosService.getPartidos()
        .subscribe({
          next: (data: Partido[]) => {
            this.partidos = Array.isArray(data) ? data : [];
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

  /** Enviar resultado (solo capitanes) */
  enviarResultado(partido: Partido): void {
    if (partido.resultadoLocal == null || partido.resultadoVisitante == null) {
      alert('Introduce ambos resultados');
      return;
    }

    this.partidosService.enviarResultado(
      partido._id!,
      partido.resultadoLocal,
      partido.resultadoVisitante
    ).subscribe({
      next: () => {
        alert('Resultado enviado correctamente');
        this.cargarPartidos(); // refrescar la lista
        this.cd.detectChanges();
      },
      error: (err) => console.error('Error enviando resultado', err)
    });
  }
}

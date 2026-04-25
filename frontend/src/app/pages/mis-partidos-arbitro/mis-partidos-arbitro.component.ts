import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PartidosService } from '../../services/partidos.service';
import { Partido } from '../../models/partido.model';

@Component({
  selector: 'app-mis-partidos-arbitro',
  templateUrl: './mis-partidos-arbitro.component.html',
  styleUrls: ['./mis-partidos-arbitro.component.scss'],
  standalone: false
})
export class MisPartidosArbitroComponent implements OnInit {

  partidos: Partido[] = [];
  cargando = true;
  usuario: any;

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

    this.cargar();
  }

  cargar(): void {
    this.cargando = true;

    this.partidosService.partidosArbitro(this.usuario.id)
      .subscribe({
        next: (data: Partido[]) => {

          this.partidos = data ?? [];

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

  actualizarPartido(partido: Partido): void {

    if (!partido.id) return;

    // validación básica
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

    this.partidosService.actualizarPartido(partido.id, payload)
      .subscribe({
        next: () => this.cargar(),
        error: (err) => console.error(err)
      });
  }
}
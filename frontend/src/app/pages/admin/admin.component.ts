import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PartidosService } from '../../services/partidos.service';
import { Partido } from '../../models/partido.model';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  partidos: Partido[] = [];

  nuevoPartido: Partial<Partido> = {
    liga_id: 0,
    club_local_id: 0,
    club_visitante_id: 0,
    arbitro_id: null,
    fecha: '',
    estado: 'pendiente'
  };

  constructor(
    private partidosService: PartidosService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cargarPartidos();
  }

  // ======================
  // CARGAR
  // ======================
  cargarPartidos(): void {
    this.partidosService.getPartidos().subscribe({
      next: (data: Partido[]) => {
        this.partidos = data ?? [];
        this.cd.detectChanges();
      },
      error: (err) => console.error('Error cargando partidos', err)
    });
  }

  // ======================
  // CREAR
  // ======================
  crearPartido(): void {

    const payload: Partial<Partido> = {
      liga_id: Number(this.nuevoPartido.liga_id),
      club_local_id: Number(this.nuevoPartido.club_local_id),
      club_visitante_id: Number(this.nuevoPartido.club_visitante_id),

      arbitro_id: this.nuevoPartido.arbitro_id
        ? Number(this.nuevoPartido.arbitro_id)
        : null,

      fecha: this.nuevoPartido.fecha ?? '',
      estado: 'pendiente'
    };

    this.partidosService.crearPartido(payload).subscribe({
      next: () => {
        this.cargarPartidos();

        this.nuevoPartido = {
          liga_id: 0,
          club_local_id: 0,
          club_visitante_id: 0,
          arbitro_id: null,
          fecha: '',
          estado: 'pendiente'
        };
      },
      error: (err) => console.error('Error creando partido', err)
    });
  }

  // ======================
  // ACTUALIZAR RESULTADO
  // ======================
  actualizarPartido(partido: Partido): void {

    const payload: Partial<Partido> = {
      resultado_local: partido.resultado_local,
      resultado_visitante: partido.resultado_visitante,
      estado: partido.estado
    };

    this.partidosService.actualizarPartido(partido.id!, payload)
      .subscribe({
        next: () => this.cargarPartidos(),
        error: (err) => console.error('Error actualizando partido', err)
      });
  }
}
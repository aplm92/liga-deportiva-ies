import { Component, OnInit } from '@angular/core';
import { PartidosService } from '../../services/partidos.service';
import { Partido } from '../../models/partido.model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  // Lista de partidos
  partidos: Partido[] = [];

  // Nuevo partido
  nuevoPartido: Omit<Partido, '_id' | 'resultadoLocal' | 'resultadoVisitante' | 'estado'> = {
    deporte: '',
    equipoLocal: '',
    equipoVisitante: '',
    arbitroId: '',
    fecha: '',
    ubicacion: ''
  };

  constructor(private partidosService: PartidosService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.cargarPartidos();
  }

  // 📥 Obtener partidos
  cargarPartidos() {
    this.partidosService.getPartidos().subscribe({
      next: (data: Partido[]) => {
        console.log('Partidos recibidos:', data);

        // Mantener fecha como string y asignar valores por defecto
        this.partidos = data.map(p => ({
          ...p,
          resultadoLocal: p.resultadoLocal ?? null,
          resultadoVisitante: p.resultadoVisitante ?? null,
          estado: p.estado ?? 'pendiente'
        }));
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error('Error al cargar partidos', err);
      }
    });
  }

  // Crear partido
  crearPartido() {
    const partido: Partido = {
      ...this.nuevoPartido,
      resultadoLocal: null,
      resultadoVisitante: null,
      estado: 'pendiente'
    };

    this.partidosService.crearPartido(partido).subscribe({
      next: () => {
        alert('Partido creado correctamente');
        this.cargarPartidos();

        // Limpiar formulario
        this.nuevoPartido = {
          deporte: '',
          equipoLocal: '',
          equipoVisitante: '',
          arbitroId: '',
          fecha: '',
          ubicacion: ''
        };
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error('Error al crear partido', err);
      }
    });
  }

  // Actualizar partido (resultado, árbitro, fecha…)
  actualizarPartido(partido: Partido) {
    if (!partido._id) return;

    this.partidosService.actualizarPartido(partido._id, partido).subscribe({
      next: () => {
        alert('Partido actualizado');
        this.cargarPartidos();
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error('Error al actualizar partido', err);
      }
    });
  }

}
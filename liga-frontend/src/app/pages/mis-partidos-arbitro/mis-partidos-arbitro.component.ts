import { Component, OnInit } from '@angular/core';
import { PartidosService } from '../../services/partidos.service';
import { Partido } from '../../models/partido.model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-mis-partidos-arbitro',
  templateUrl: './mis-partidos-arbitro.component.html',
  styleUrls: ['./mis-partidos-arbitro.component.scss'],
  standalone: false
})
export class MisPartidosArbitroComponent implements OnInit {

  partidos: Partido[] = [];
  cargando = true;

  constructor(private partidosService: PartidosService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
  const usuario = JSON.parse(localStorage.getItem('usuario')!);

  this.partidosService.partidosArbitro(usuario._id)
    .subscribe({
      next: (data: any[]) => {
        // Convertir fecha a Date para el pipe
        this.partidos = data.map(p => ({
          ...p,
          fecha: new Date(p.fecha),
          resultadoLocal: p.resultadoLocal ?? null,
          resultadoVisitante: p.resultadoVisitante ?? null
        }));
        this.cargando = false;
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error('Error cargando partidos', err);
        this.cargando = false;
      }
    });
}


  actualizarPartido(partido: Partido) {
    if (!partido._id) return;

    this.partidosService.actualizarPartido(partido._id, partido)
      .subscribe({
        next: () => {
          alert('Partido actualizado correctamente');
          this.cd.detectChanges();
        },
        error: (err) => {
          console.error('Error al actualizar partido', err);
        }
      });
  }
}

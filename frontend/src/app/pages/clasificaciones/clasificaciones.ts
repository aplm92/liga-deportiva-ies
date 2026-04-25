import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Clasificacion {
  equipo: string;
  pj: number;
  pg: number;
  pe: number;
  pp: number;
  gf: number;
  gc: number;
  puntos: number;
}

@Component({
  selector: 'app-clasificaciones',
  standalone: false,
  templateUrl: './clasificaciones.html',
  styleUrls: ['./clasificaciones.scss'],
})
export class Clasificaciones implements OnInit {

  resultados: any[] = [];

  //agrupado por competición
  clasificacionesPorCompeticion: Record<string, Clasificacion[]> = {};

  private apiUrl = 'http://127.0.0.1:8000/api/resultados';

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cargarResultados();
  }

  cargarResultados(): void {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        console.log('RESULTADOS API:', data);

        this.resultados = data;

        this.calcularClasificaciones();

        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error cargando resultados', err);
      }
    });
  }

  calcularClasificaciones(): void {

    const tablas: Record<string, Record<string, Clasificacion>> = {};

    this.resultados.forEach(p => {

      const comp = p.competicion || 'Sin competición';

      if (!tablas[comp]) {
        tablas[comp] = {};
      }

      const local = p.equipoLocal;
      const visitante = p.equipoVisitante;

      const gl = Number(p.golesLocal ?? 0);
      const gv = Number(p.golesVisitante ?? 0);

      // Inicializar equipos
      if (!tablas[comp][local]) {
        tablas[comp][local] = this.crearEquipo(local);
      }

      if (!tablas[comp][visitante]) {
        tablas[comp][visitante] = this.crearEquipo(visitante);
      }

      const t = tablas[comp];

      // PJ
      t[local].pj++;
      t[visitante].pj++;

      // GF / GC
      t[local].gf += gl;
      t[local].gc += gv;

      t[visitante].gf += gv;
      t[visitante].gc += gl;

      // Resultado
      if (gl > gv) {
        t[local].pg++;
        t[local].puntos += 3;
        t[visitante].pp++;
      } else if (gl < gv) {
        t[visitante].pg++;
        t[visitante].puntos += 3;
        t[local].pp++;
      } else {
        t[local].pe++;
        t[visitante].pe++;
        t[local].puntos += 1;
        t[visitante].puntos += 1;
      }
    });

    // convertir a array ordenado por puntos
    this.clasificacionesPorCompeticion = {};

    Object.keys(tablas).forEach(comp => {
      this.clasificacionesPorCompeticion[comp] =
        Object.values(tablas[comp])
          .sort((a, b) => b.puntos - a.puntos);
    });
  }

  crearEquipo(nombre: string): Clasificacion {
    return {
      equipo: nombre,
      pj: 0,
      pg: 0,
      pe: 0,
      pp: 0,
      gf: 0,
      gc: 0,
      puntos: 0
    };
  }

  // Para usar Object.keys en HTML
  Object = Object;
}
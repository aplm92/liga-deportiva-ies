import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ResultadosService } from '../../services/resultados.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.html',
  styleUrls: ['./resultados.scss'],
  standalone: false
})
export class ResultadosComponent implements OnInit {

  resultados: any[] = [];
  resultadosFiltrados: any[] = [];

  filtroLiga = '';

  constructor(
    private resultadosService: ResultadosService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.resultadosService.getResultados().subscribe({
      next: data => {
        this.resultados = data ?? [];
        this.resultadosFiltrados = [...this.resultados];
        this.cdr.detectChanges();
      },
      error: err => console.error('Error cargando resultados', err)
    });
  }

  filtrarResultados(): void {

    this.resultadosFiltrados = this.resultados.filter(p => {

      const ligaOk =
        !this.filtroLiga ||
        p.liga?.nombre?.toLowerCase().includes(this.filtroLiga.toLowerCase());

      return ligaOk;
    });
  }
}
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ArbitroService } from '../../services/arbitro.service';
import { Arbitro } from '../../models/arbitro.model';

@Component({
  selector: 'app-arbitros',
  standalone: false,
  templateUrl: './arbitros.html',
  styleUrls: ['./arbitros.scss']
})
export class Arbitros implements OnInit {

  arbitros: Arbitro[] = [];
  arbitroSeleccionado: Arbitro | null = null;

  constructor(
    private arbitroService: ArbitroService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cargarArbitros();
  }

  cargarArbitros(): void {
    this.arbitroService.getArbitros().subscribe({
      next: (data) => {
        console.log('ARBITROS API:', data);

        this.arbitros = data;

        //importante para que pinte sin hacer click
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err)
    });
  }

  mostrarDetalle(arbitro: Arbitro) {
    this.arbitroSeleccionado = arbitro;

    const modal = new (window as any).bootstrap.Modal(
      document.getElementById('modalDetalleArbitro')
    );
    modal.show();
  }
}
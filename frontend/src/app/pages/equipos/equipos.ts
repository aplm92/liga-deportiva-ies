import { Component, OnInit } from '@angular/core';
import { ClubsService, Club } from '../../services/clubs.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.html',
  styleUrls: ['./equipos.scss'],
  standalone: false
})
export class Equipos implements OnInit {

  equipos: Club[] = [];
  equiposFiltrados: Club[] = [];
  filtroCompeticion = '';
  busqueda = '';

  constructor(
  private clubsService: ClubsService,
  private cdr: ChangeDetectorRef
) {}

  ngOnInit() {
  this.clubsService.getClubs().subscribe({
    next: (data) => {
      this.equipos = data ?? [];
      this.equiposFiltrados = [...this.equipos];

      this.cdr.detectChanges();
    },
    error: err => console.error(err)
  });
}

  aplicarFiltros() {
    const bus = this.busqueda.toLowerCase();

    this.equiposFiltrados = this.equipos.filter(e =>
      (!bus || e.nombre?.toLowerCase().includes(bus))
    );
  }

}
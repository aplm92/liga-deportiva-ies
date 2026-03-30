import { Component } from '@angular/core';

@Component({
  selector: 'app-clasificaciones',
  standalone: false,
  templateUrl: './clasificaciones.html',
  styleUrl: './clasificaciones.scss',
})

export class Clasificaciones {
  filtroCompeticion: string = '';
}
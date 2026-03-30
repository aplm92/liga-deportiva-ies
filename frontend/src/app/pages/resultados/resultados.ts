import { Component, OnInit } from '@angular/core';

interface Resultado {
  competicion: string;
  jornada: string;
  columnas: string[];   // Nombres de las columnas de la tabla
  tabla: any[];         // Cada fila es un objeto {Columna: valor}
}
@Component({
  selector: 'app-resultados',
  standalone: false,
  templateUrl: './resultados.html',
  styleUrls: ['./resultados.scss']
})

export class Resultados implements OnInit {
  filtroCompeticion = '';
  filtroJornada = '';
  resultados: Resultado[] = [
    {
      competicion: 'futbol',
      jornada: '1',
      columnas: ['Fecha','Equipo Local','Resultado','Equipo Visitante','Árbitro'],
      tabla: [
        { 'Fecha': '15/01/2024', 'Equipo Local': 'Los Halcones', 'Resultado': '2 - 1', 'Equipo Visitante': 'Los Leones', 'Árbitro': 'Miguel Ángel' },
        { 'Fecha': '15/01/2024', 'Equipo Local': 'Dragones FC', 'Resultado': '3 - 0', 'Equipo Visitante': 'Águilas Rojas', 'Árbitro': 'Carlos Ruiz' },
        { 'Fecha': '16/01/2024', 'Equipo Local': 'Tigres', 'Resultado': '1 - 1', 'Equipo Visitante': 'Panteras', 'Árbitro': 'Ana García' },
      ]
    },
    // Más resultados de otras jornadas y competiciones
  ];

  resultadosFiltrados: Resultado[] = [];

  ngOnInit(): void {
    this.resultadosFiltrados = this.resultados;
  }

  filtrarResultados(): void {
    this.resultadosFiltrados = this.resultados.filter(r => {
      const coincideCompeticion = !this.filtroCompeticion || r.competicion.toLowerCase() === this.filtroCompeticion.toLowerCase();
      const coincideJornada = !this.filtroJornada || r.jornada === this.filtroJornada;
      return coincideCompeticion && coincideJornada;
    });
  }
}

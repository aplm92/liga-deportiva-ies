import { Component } from '@angular/core';
import { Arbitro } from './arbitro.model';

@Component({
  selector: 'app-arbitros',
  standalone: false,
  templateUrl: './arbitros.html',
  styleUrl: './arbitros.scss',
})
export class Arbitros {
  arbitros: Arbitro[] = [
    {
      nombre: 'Miguel Ángel',
      competicion: 'Fútbol',
      experiencia: 8,
      categoria: 'Experto',
      partidosArbitrados: 15,
      tarjetasAmarillas: 23,
      tarjetasRojas: 2,
      email: 'miguel.angel@instituto.edu',
      telefono: '+34 600 111 222',
      certificaciones: ['Árbitro Nacional de Fútbol', 'Curso de Arbitraje Avanzado']
    },
    {
      nombre: 'Carlos Ruiz',
      competicion: 'Fútbol',
      experiencia: 4,
      categoria: 'Intermedio',
      partidosArbitrados: 12,
      tarjetasAmarillas: 18,
      tarjetasRojas: 1,
      email: 'carlos.ruiz@instituto.edu',
      telefono: '+34 600 222 333',
      certificaciones: ['Árbitro Regional de Fútbol']
    },
    {
        nombre: 'Ana García',
        competicion: 'Fútbol',
        experiencia: 1,
        categoria: 'Principiante',
        partidosArbitrados: 8,
        tarjetasAmarillas: 12,
        tarjetasRojas: 0,
        email: 'ana.garcia@instituto.edu',
        telefono: '+34 600 333 444',
        certificaciones: ['Curso Básico de Arbitraje']
    },
    {
        nombre: 'Luis Martínez',
        competicion: 'Baloncesto',
        experiencia: 10,
        categoria: 'Experto',
        partidosArbitrados: 20,
        faltas: 45,
        tecnicas: 3,
        email: 'luis.martinez@instituto.edu',
        telefono: '+34 600 444 555',
        certificaciones: ['Árbitro Nacional de Baloncesto', 'Curso de Arbitraje FIBA']
    },
    {
        nombre: 'María López',
        competicion: 'Baloncesto',
        experiencia: 5,
        categoria: 'Intermedio',
        partidosArbitrados: 18,
        faltas: 38,
        tecnicas: 2,
        email: 'maria.lopez.arbitro@instituto.edu',
        telefono: '+34 600 555 666',
        certificaciones: ['Árbitro Regional de Baloncesto']
    },
    {
        nombre: 'Pedro Sánchez',
        competicion: 'Balonmano',
        experiencia: 4,
        categoria: 'Intermedio',
        partidosArbitrados: 10,
        exclusiones: 8,
        descalificaciones: 1,
        email: 'pedro.sanchez.arbitro@instituto.edu',
        telefono: '+34 600 666 777',
        certificaciones: ['Árbitro Regional de Balonmano']
    },
    {
        nombre: 'Elena Fernández',
        competicion: 'Voleibol',
        experiencia: 7,
        categoria: 'Experto',
        partidosArbitrados: 14,
        sets: 42,
        email: 'elena.fernandez@instituto.edu',
        telefono: '+34 600 777 888',
        certificaciones: ['Árbitro Nacional de Voleibol', 'Curso de Arbitraje FIVB']
    }
  ];

arbitroSeleccionado: Arbitro | null = null;

  mostrarDetalle(arbitro: Arbitro) {
    this.arbitroSeleccionado = arbitro;

    const modal = new (window as any).bootstrap.Modal(
      document.getElementById('modalDetalleArbitro')
    );
    modal.show();
  }
}

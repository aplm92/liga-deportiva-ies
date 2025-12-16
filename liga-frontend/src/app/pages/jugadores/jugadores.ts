import { Component } from '@angular/core';

interface Jugador {
  nombre: string;
  equipo: string;
  competicion: string;
  posicion: string;
  numero: number;
  edad: number;
  partidosJugados: number;
  goles?: number;
  asistencias?: number;
  paradas?: number;
  golesRecibidos?: number;
  tarjetasAmarillas?: number;
  tarjetasRojas?: number;
  puntos?: number;
  rebotes?: number;
  sets?: number;
  victorias?: number;
  derrotas?: number;
  setsGanados?: number;
  setsPerdidos?: number;
  medallasOro?: number;
  medallasPlata?: number;
  medallasBronce?: number;
  mejorTiempo?: string;
  email: string;
}

@Component({
  selector: 'app-jugadores',
  standalone: false,
  templateUrl: './jugadores.html',
  styleUrls: ['./jugadores.scss']
})
export class Jugadores {
  filtroCompeticion: string = '';
  filtroEquipo: string = '';
  busqueda: string = '';

  jugadores: Record<string, Jugador> = {
    'marta-mangue': {
        nombre: 'Marta Mangué',
        equipo: 'Las Guerreras',
        competicion: 'Balonmano',
        posicion: 'Lateral',
        numero: 10,
        edad: 22,
        partidosJugados: 8,
        goles: 45,
        asistencias: 18,
        email: 'marta.mangue@instituto.edu'
    },
    'eli-pinedo': {
        nombre: 'Eli Pinedo',
        equipo: 'Las Guerreras',
        competicion: 'Balonmano',
        posicion: 'Extremo',
        numero: 7,
        edad: 21,
        partidosJugados: 8,
        goles: 38,
        asistencias: 12,
        email: 'elisabeth.pinedo@instituto.edu'
    },
    'nerea-pena': {
        nombre: 'Nerea Pena',
        equipo: 'Las Guerreras',
        competicion: 'Balonmano',
        posicion: 'Lateral',
        numero: 8,
        edad: 20,
        partidosJugados: 8,
        goles: 42,
        asistencias: 15,
        email: 'nerea.pena@instituto.edu'
    },
    'silvia-navarro': {
        nombre: 'Silvia Navarro',
        equipo: 'Las Guerreras',
        competicion: 'Balonmano',
        posicion: 'Portero',
        numero: 1,
        edad: 23,
        partidosJugados: 8,
        paradas: 68,
        golesRecibidos: 45,
        email: 'silvia.navarro@instituto.edu'
    },
    'julen-aguinagalde': {
        nombre: 'Julen Aguinagalde',
        equipo: 'Los Hispanos',
        competicion: 'Balonmano',
        posicion: 'Pívot',
        numero: 9,
        edad: 24,
        partidosJugados: 8,
        goles: 52,
        asistencias: 8,
        email: 'julen.aguinagalde@instituto.edu'
    },
    'raul-entrerrios': {
        nombre: 'Raúl Entrerríos',
        equipo: 'Los Hispanos',
        competicion: 'Balonmano',
        posicion: 'Central',
        numero: 10,
        edad: 25,
        partidosJugados: 8,
        goles: 38,
        asistencias: 42,
        email: 'raul.entrerrios@instituto.edu'
    },
    'daniel-sarmiento': {
        nombre: 'Daniel Sarmiento',
        equipo: 'Los Hispanos',
        competicion: 'Balonmano',
        posicion: 'Lateral',
        numero: 11,
        edad: 23,
        partidosJugados: 8,
        goles: 48,
        asistencias: 15,
        email: 'daniel.sarmiento@instituto.edu'
    },
    'victor-tomas': {
        nombre: 'Víctor Tomás',
        equipo: 'Los Hispanos',
        competicion: 'Balonmano',
        posicion: 'Extremo',
        numero: 7,
        edad: 22,
        partidosJugados: 8,
        goles: 35,
        asistencias: 10,
        email: 'victor.tomas@instituto.edu'
    },
    'arpad-sterbik': {
        nombre: 'Arpad Sterbik',
        equipo: 'Los Hispanos',
        competicion: 'Balonmano',
        posicion: 'Portero',
        numero: 1,
        edad: 26,
        partidosJugados: 8,
        paradas: 72,
        golesRecibidos: 48,
        email: 'arpad.sterbik@instituto.edu'
    },
    'juan-perez': {
        nombre: 'Juan Pérez',
        equipo: 'Los Halcones',
        competicion: 'Fútbol',
        posicion: 'Portero',
        numero: 1,
        edad: 20,
        partidosJugados: 8,
        goles: 0,
        asistencias: 0,
        tarjetasAmarillas: 1,
        tarjetasRojas: 0,
        email: 'juan.perez@instituto.edu'
    },
    'miguel-torres': {
        nombre: 'Miguel Torres',
        equipo: 'Los Halcones',
        competicion: 'Fútbol',
        posicion: 'Defensa',
        numero: 2,
        edad: 19,
        partidosJugados: 8,
        goles: 2,
        asistencias: 3,
        tarjetasAmarillas: 2,
        tarjetasRojas: 0,
        email: 'miguel.torres@instituto.edu'
    },
    'carlos-garcia': {
        nombre: 'Carlos García',
        equipo: 'Los Leones',
        competicion: 'Fútbol',
        posicion: 'Portero',
        numero: 1,
        edad: 21,
        partidosJugados: 8,
        goles: 0,
        asistencias: 0,
        tarjetasAmarillas: 0,
        tarjetasRojas: 0,
        email: 'carlos.garcia@instituto.edu'
    },
    'ana-martinez': {
        nombre: 'Ana Martínez',
        equipo: 'Thunder',
        competicion: 'Baloncesto',
        posicion: 'Base',
        numero: 5,
        edad: 19,
        partidosJugados: 10,
        puntos: 156,
        rebotes: 45,
        asistencias: 78,
        email: 'ana.martinez@instituto.edu'
    },
    'luis-rodriguez': {
        nombre: 'Luis Rodríguez',
        equipo: 'Aguilas',
        competicion: 'Baloncesto',
        posicion: 'Base',
        numero: 4,
        edad: 20,
        partidosJugados: 10,
        puntos: 182,
        rebotes: 52,
        asistencias: 95,
        email: 'luis.rodriguez@instituto.edu'
    },
    'maria-lopez': {
        nombre: 'María López',
        equipo: 'Los Lobos',
        competicion: 'Balonmano',
        posicion: 'Portero',
        numero: 1,
        edad: 20,
        partidosJugados: 6,
        paradas: 45,
        golesRecibidos: 28,
        email: 'maria.lopez@instituto.edu'
    },
    'pedro-sanchez': {
        nombre: 'Pedro Sánchez',
        equipo: 'Titans',
        competicion: 'Voleibol',
        posicion: 'Colocador',
        numero: 1,
        edad: 21,
        partidosJugados: 5,
        sets: 15,
        puntos: 42,
        asistencias: 38,
        email: 'pedro.sanchez@instituto.edu'
    },
    'carlos-nadal': {
        nombre: 'Carlos Nadal',
        equipo: 'Raquetas Elite',
        competicion: 'Tenis',
        posicion: 'Individual',
        numero: 1,
        edad: 20,
        partidosJugados: 12,
        victorias: 9,
        derrotas: 3,
        setsGanados: 27,
        setsPerdidos: 12,
        email: 'carlos.nadal@instituto.edu'
    },
    'miguel-bolt': {
        nombre: 'Miguel Bolt',
        equipo: 'Los Veloces',
        competicion: 'Atletismo',
        posicion: 'Velocista',
        numero: 1,
        edad: 19,
        partidosJugados: 15,
        medallasOro: 5,
        medallasPlata: 3,
        medallasBronce: 2,
        mejorTiempo: '10.45s',
        email: 'miguel.bolt@instituto.edu'
    },
    'laura-phelps': {
        nombre: 'Laura Phelps',
        equipo: 'Los Delfines',
        competicion: 'Natación',
        posicion: 'Estilo Libre',
        numero: 1,
        edad: 20,
        partidosJugados: 8,
        victorias: 6,
        mejorTiempo: '52.30s',
        medallasOro: 4,
        medallasPlata: 2,
        email: 'laura.phelps@instituto.edu'
    },
    'pablo-pareja': {
        nombre: 'Pablo Pareja',
        equipo: 'Palas Pro',
        competicion: 'Pádel',
        posicion: 'Pareja A',
        numero: 1,
        edad: 21,
        partidosJugados: 10,
        victorias: 7,
        derrotas: 3,
        setsGanados: 21,
        setsPerdidos: 12,
        email: 'pablo.pareja@instituto.edu'
    },
    'sergio-ramos': {
        nombre: 'Sergio Ramos',
        equipo: 'Los Halcones',
        competicion: 'Fútbol',
        posicion: 'Defensa',
        numero: 3,
        edad: 20,
        partidosJugados: 8,
        goles: 1,
        asistencias: 2,
        tarjetasAmarillas: 1,
        tarjetasRojas: 0,
        email: 'sergio.ramos@instituto.edu'
    },
    'david-silva': {
        nombre: 'David Silva',
        equipo: 'Los Halcones',
        competicion: 'Fútbol',
        posicion: 'Centrocampista',
        numero: 8,
        edad: 19,
        partidosJugados: 8,
        goles: 4,
        asistencias: 6,
        tarjetasAmarillas: 0,
        tarjetasRojas: 0,
        email: 'david.silva@instituto.edu'
    },
    'laura-fernandez': {
        nombre: 'Laura Fernández',
        equipo: 'Thunder',
        competicion: 'Baloncesto',
        posicion: 'Alero',
        numero: 7,
        edad: 18,
        partidosJugados: 10,
        puntos: 142,
        rebotes: 38,
        asistencias: 45,
        email: 'laura.fernandez@instituto.edu'
    },
    'carmen-sanchez': {
        nombre: 'Carmen Sánchez',
        equipo: 'Thunder',
        competicion: 'Baloncesto',
        posicion: 'Pívot',
        numero: 15,
        edad: 20,
        partidosJugados: 10,
        puntos: 178,
        rebotes: 95,
        asistencias: 12,
        email: 'carmen.sanchez@instituto.edu'
    },
    'elena-garcia': {
        nombre: 'Elena García',
        equipo: 'Los Lobos',
        competicion: 'Balonmano',
        posicion: 'Extremo',
        numero: 7,
        edad: 19,
        partidosJugados: 6,
        goles: 18,
        asistencias: 8,
        email: 'elena.garcia@instituto.edu'
    },
    'jorge-martin': {
        nombre: 'Jorge Martín',
        equipo: 'Titans',
        competicion: 'Voleibol',
        posicion: 'Rematador',
        numero: 5,
        edad: 20,
        partidosJugados: 5,
        sets: 15,
        puntos: 58,
        asistencias: 12,
        email: 'jorge.martin@instituto.edu'
    }
  };

  jugadorDetalle?: Jugador;

  get jugadoresFiltrados(): Record<string, Jugador> {
    const filtrados: Record<string, Jugador> = {};
    Object.entries(this.jugadores).forEach(([id, jugador]) => {
      const coincideCompeticion = !this.filtroCompeticion ||
        jugador.competicion.toLowerCase() === this.filtroCompeticion.toLowerCase();
      const coincideEquipo = !this.filtroEquipo ||
        jugador.equipo.toLowerCase() === this.filtroEquipo.toLowerCase();
      const coincideNombre = !this.busqueda ||
        jugador.nombre.toLowerCase().includes(this.busqueda.toLowerCase());

      if (coincideCompeticion && coincideEquipo && coincideNombre) {
        filtrados[id] = jugador;
      }
    });
    return filtrados;
  }

  mostrarDetalle(id: string) {
    this.jugadorDetalle = this.jugadores[id];
    const modalEl = document.getElementById('modalDetalleJugador');
    if (modalEl) {
      const modal = new (window as any).bootstrap.Modal(modalEl);
      modal.show();
    }
  }
}

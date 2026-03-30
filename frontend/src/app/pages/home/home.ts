declare var bootstrap: any;

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

interface Noticia {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  imagen: string;
}

interface Deporte {
  nombre: string;
  imagen: string;
  descripcion: string;
  routerLink: string;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {

  noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'Inicio de la Temporada 2024',
      descripcion: 'La Liga Deportiva del IES Maestre de Calatrava da comienzo a una nueva temporada llena de emociones y competición...',
      fecha: '2025-01-15',
      imagen: 'assets/images/ligadeportiva.jpg'
    },
    {
      id: 2,
      titulo: 'Nuevos Equipos Inscritos',
      descripcion: 'Este año contamos con más equipos que nunca. Descubre quiénes se han unido a la competición...',
      fecha: '2025-01-10',
      imagen: 'assets/images/ligadeportiva2.jpg'
    },
    {
      id: 3,
      titulo: 'Campeonato de Baloncesto',
      descripcion: 'El campeonato de baloncesto está llegando a su fase final. No te pierdas los partidos decisivos...',
      fecha: '2025-01-05',
      imagen: 'assets/images/ligadeportiva3.jpg'
    }
  ];

  deportes: Deporte[] = [
    { nombre: 'Balonmano', imagen: 'assets/images/logoBalonmano.jpg', descripcion: 'Torneo de balonmano con 10 equipos participantes.', routerLink: '/equipos?deporte=balonmano' },
    { nombre: 'Fútbol', imagen: 'assets/images/logoFutbol.jpg', descripcion: 'Competición de fútbol 11 con 16 equipos participantes.', routerLink: '/equipos?deporte=futbol' },
    { nombre: 'Baloncesto', imagen: 'assets/images/logoBaloncesto.jpg', descripcion: 'Liga de baloncesto con 12 equipos en competición.', routerLink: '/equipos?deporte=baloncesto' },
    { nombre: 'Voleibol', imagen: 'assets/images/logoVoleibol.jpg', descripcion: 'Competición de voleibol con 8 equipos mixtos.', routerLink: '/equipos?deporte=voleibol' },
    { nombre: 'Tenis', imagen: 'assets/images/logoTenis.jpg', descripcion: 'Torneo de tenis individual y dobles.', routerLink: '/equipos?deporte=tenis' },
    { nombre: 'Atletismo', imagen: 'assets/images/logoAtletismo.jpg', descripcion: 'Competición de atletismo con múltiples disciplinas.', routerLink: '/equipos?deporte=atletismo' },
    { nombre: 'Natación', imagen: 'assets/images/logoNatacion.jpg', descripcion: 'Competición de natación en diferentes estilos.', routerLink: '/equipos?deporte=natacion' },
    { nombre: 'Pádel', imagen: 'assets/images/logoPadel.jpg', descripcion: 'Torneo de pádel en parejas.', routerLink: '/equipos?deporte=padel' }
  ];

  contadorCarousel: number = 1;

  // Para el formulario de inscripción
  inscripcion = {
    nombreEquipo: '',
    deporte: '',
    capitan: '',
    email: '',
    telefono: ''
  };

  @ViewChild('toastInscripcion', { static: true }) toastInscripcion!: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  formatearFecha(fecha: string): string {
    return new Date(fecha).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  onSlide(event: any) {
    this.contadorCarousel = event.to + 1;
  }

  enviarInscripcion(form: any) {
    if (form.valid) {
      console.log('Datos de inscripción:', this.inscripcion);
      
      // Mostrar toast
      const toast = new bootstrap.Toast(this.toastInscripcion.nativeElement);
      toast.show();

      // Reset form
      form.resetForm();
    } else {
      form.control.markAllAsTouched();
    }
  }
}

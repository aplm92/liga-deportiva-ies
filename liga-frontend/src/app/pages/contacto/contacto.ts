import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.html',
  standalone: false,
  styleUrls: ['./contacto.scss']
})
export class Contacto {

  // Datos del formulario
  contacto = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  // FAQs
  faqs = [
    { id: 'faq1', pregunta: '¿Cómo puedo inscribir mi equipo?', respuesta: 'Puedes inscribir tu equipo completando el formulario disponible en la página principal.' },
    { id: 'faq2', pregunta: '¿Cuántos jugadores puede tener un equipo?', respuesta: 'Depende del deporte: Fútbol (16-18), Baloncesto (10-12), Balonmano (12-14), Voleibol (10-12).' },
    { id: 'faq3', pregunta: '¿Dónde se juegan los partidos?', respuesta: 'Los partidos se disputan en las instalaciones deportivas del instituto.' },
    { id: 'faq4', pregunta: '¿Cómo puedo consultar los resultados?', respuesta: 'En la sección de Resultados con filtros por competición y jornada.' },
    { id: 'faq5', pregunta: '¿Puedo ser árbitro?', respuesta: 'Sí, contacta con nosotros indicando tu interés en el arbitraje.' }
  ];

  // ID de FAQ abierta actualmente
  activeFaqId: string | null = null;

  // Toggle FAQ
  toggleFaq(id: string) {
    this.activeFaqId = this.activeFaqId === id ? null : id;
  }

  // Validación de email
  validarEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Enviar contacto
  enviarContacto(form: any) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    if (!this.validarEmail(this.contacto.email)) {
      alert('Por favor, introduce un email válido.');
      return;
    }

    console.log('Datos de contacto:', this.contacto);

    // Resetear formulario
    form.resetForm();

    // Mostrar toast
    const toastEl = document.getElementById('toastContacto');
    if (toastEl) {
      const toast = new (window as any).bootstrap.Toast(toastEl);
      toast.show();
    }
  }
}

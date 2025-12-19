import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

declare var bootstrap: any;

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent implements AfterViewInit {

  email = '';
  password = '';

  mensajeToast = '';
  mostrarToast = false;

  @ViewChild('toastLogin', { static: false })
  toastLogin?: ElementRef;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    // Intencionalmente vacío
    // El toast se lanza solo cuando existe
  }

  login(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (usuario: any) => {

        //  Guardar usuario
        localStorage.setItem('usuario', JSON.stringify(usuario));
        this.router.navigate(['/partidos'], { replaceUrl: true });


        //  Preparar toast
        this.mensajeToast = `Bienvenido ${usuario.nombre}`;
        this.mostrarToast = true;

        //  Esperar a que Angular pinte el DOM
        setTimeout(() => {
          if (this.toastLogin?.nativeElement) {
            const toast = new bootstrap.Toast(
              this.toastLogin.nativeElement,
              { delay: 2000 }
            );
            toast.show();
          }
        }, 0);

        //  Redirigir después del toast
        setTimeout(() => {
          this.redirigirPorTipo(usuario.tipo);
        }, 1800);
      },
      error: () => {
        alert('Usuario o contraseña incorrectos');
      }
    });
  }

  redirigirPorTipo(tipo: string): void {
    switch (tipo) {
      case 'admin':
        this.router.navigate(['/admin']);
        break;
      case 'arbitro':
        this.router.navigate(['/mis-partidos-arbitro']);
        break;
      case 'capitan':
      case 'normal':
        this.router.navigate(['/lista-partidos']);
        break;
      default:
        this.router.navigate(['/']);
    }
  }
}

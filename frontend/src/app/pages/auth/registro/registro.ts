import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.html',
  styleUrls: ['./registro.scss']
})
export class RegistroComponent {

  nombre = '';
  email = '';
  password = '';
  tipo = 'normal'; // Por defecto, puedes cambiar con un select

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  registrar() {
    this.authService.register(this.nombre, this.email, this.password, this.tipo)
      .subscribe({
        next: usuario => {
          console.log('Usuario registrado:', usuario);
          alert('Usuario registrado correctamente');
          this.router.navigate(['/login']);
        },
        error: (err: any) => console.error(err)
      });
  }
}

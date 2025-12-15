import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Equipos } from './pages/equipos/equipos';
import { LoginComponent } from './pages/auth/login/login';
import { Clasificaciones } from './pages/clasificaciones/clasificaciones';
import { Resultados } from './pages/resultados/resultados';
import { Jugadores } from './pages/jugadores/jugadores';
import { Arbitros } from './pages/arbitros/arbitros';
import { Contacto } from './pages/contacto/contacto';
import { Registro } from './pages/auth/registro/registro';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'equipos', component: Equipos },
  { path: 'clasificaciones', component: Clasificaciones },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: Registro },
  { path: 'resultados', component: Resultados },
  { path: 'jugadores', component: Jugadores },
  { path: 'arbitros', component: Arbitros },
  { path: 'contacto', component: Contacto }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { RegistroComponent } from './pages/auth/registro/registro';
import { MisPartidosArbitroComponent } from './pages/mis-partidos-arbitro/mis-partidos-arbitro.component';
import { ListaPartidosComponent } from './pages/lista-partidos/lista-partidos.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'equipos', component: Equipos },
  { path: 'clasificaciones', component: Clasificaciones },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'resultados', component: Resultados },
  { path: 'jugadores', component: Jugadores },
  { path: 'arbitros', component: Arbitros },
  { path: 'mis-partidos-arbitro', component: MisPartidosArbitroComponent},
  { path: 'contacto', component: Contacto },
  { path: 'lista-partidos', component: ListaPartidosComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

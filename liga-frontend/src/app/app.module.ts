import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app.component';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Home } from './pages/home/home';
import { Equipos } from './pages/equipos/equipos';
import { Clasificaciones } from './pages/clasificaciones/clasificaciones';
import { Jugadores } from './pages/jugadores/jugadores';
import { Arbitros } from './pages/arbitros/arbitros';
import { Resultados } from './pages/resultados/resultados';
import { Contacto } from './pages/contacto/contacto';
import { LoginComponent } from './pages/auth/login/login';
import { RegistroComponent } from './pages/auth/registro/registro';
import { AdminComponent } from './pages/admin/admin.component';
import { PartidosService } from './services/partidos.service';
import { CommonModule } from '@angular/common';
import { MisPartidosArbitroComponent } from './pages/mis-partidos-arbitro/mis-partidos-arbitro.component';
import { ListaPartidosComponent } from './pages/lista-partidos/lista-partidos.component';
import { ChangeDetectorRef } from '@angular/core';



@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Home,
    Equipos,
    Clasificaciones,
    Jugadores,
    Arbitros,
    Resultados,
    Contacto,
    LoginComponent,
    RegistroComponent,
    AdminComponent,
    MisPartidosArbitroComponent,
    ListaPartidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

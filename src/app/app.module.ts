import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { AboutComponent } from './page/about/about.component';
import { AhorcadoComponent } from './page/juegos/ahorcado/ahorcado.component';
import { MayoromenorComponent } from './page/juegos/mayoromenor/mayoromenor.component';
import { PreguntadosComponent } from './page/juegos/preguntados/preguntados.component';
import { MijuegoComponent } from './page/juegos/mijuego/mijuego.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    AhorcadoComponent,
    MayoromenorComponent,
    PreguntadosComponent,
    MijuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuntuacionComponent } from './puntuacion/puntuacion.component';
import { ListaComponent } from './lista/lista.component';
import { JuegosComponent } from './juegos/juegos.component';
import { DatosServicio } from './datos.service';

@NgModule({
  declarations: [
    AppComponent,
    PuntuacionComponent,
    ListaComponent,
    JuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DatosServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }

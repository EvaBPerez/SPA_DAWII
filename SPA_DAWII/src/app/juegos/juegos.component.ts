import { Component, OnInit } from '@angular/core';
import { DatosServicio } from '../datos.service';
import { Juego } from '../juego.model';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  titulo = 'Juego Form';
  DatosServicio: any;

  constructor(private juegoServicio: DatosServicio) { }

  juegos:Juego[] = [];

  newJuego(): void {
    let miJuego = new Juego(this.boxTitulo, this.boxGeneracion, this.boxYear);
    this.juegoServicio.addJuegoServicio(miJuego);
  }

  boxTitulo:string = "";
  boxGeneracion = 0;
  boxYear = 0;

  ngOnInit(): void {
    this.juegos = this.juegoServicio.juegos;
  }

}

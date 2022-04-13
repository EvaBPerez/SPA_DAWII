import { Component, Input, OnInit } from '@angular/core';
import { Juego } from '../juego.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() juegoLista:Juego = new Juego("Juego", 0, 0);
  @Input() indexLista:number = 0;

  puntuacion = "";

  addPuntuacion(newPuntuacion: string) {
    this.puntuacion = (newPuntuacion);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

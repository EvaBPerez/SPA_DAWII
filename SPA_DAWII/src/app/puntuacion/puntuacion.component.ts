import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-puntuacion',
  templateUrl: './puntuacion.component.html',
  styleUrls: ['./puntuacion.component.css']
})
export class PuntuacionComponent implements OnInit {

  @Output() newPuntuacionEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addnewPuntuacion(value: string) {
    this.newPuntuacionEvent.emit(value);
  }

}

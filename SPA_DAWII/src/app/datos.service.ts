import { Juego } from "./juego.model";

export class DatosServicio {
    juegos:Juego[] = [
        new Juego("Pokemon verde hoja", 1, 2004),
    ];

    addJuegoServicio(miJuego:Juego) {
        this.juegos.push(miJuego);
    }

}
import { Component, OnInit } from '@angular/core';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css'],
})
export class PersonajeComponent implements OnInit {

  pokemones: any[] = [];

  constructor(private datosService: DatosService) {
    this.obtenerPokemones()
  }

  ngOnInit(): void {
  }

  obtenerPokemones() {
    this.datosService.obtenerPokemones()
    .subscribe((datos: any) => {
      datos.results.forEach((pokemon: { url: string; }) => {
        this.datosService.obtenerDetallePokemon(pokemon.url)
          .subscribe((detallePokemon: any) => {
            this.pokemones.push(detallePokemon);
          });
      });
    });
  }

  // this.nombre = datos.
  //     this.imagenUrl = datos.sprites.front_default
}

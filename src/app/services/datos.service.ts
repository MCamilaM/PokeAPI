import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class DatosService {
  urlBase: string;

  constructor(private http: HttpClient) {
    this.urlBase = 'https://pokeapi.co/api/v2/pokemon';
  }

  obtenerPokemones() {
    return this.http.get(this.urlBase);
  }

  buscarPokemon(nombre: string) {
    return this.http.get(`${this.urlBase}/${nombre}`);
  }

  obtenerDetallePokemon(url:string){
      return this.http.get(url)
  }
}

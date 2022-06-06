import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-obtener-personaje',
  templateUrl: './obtener-personaje.component.html',
  styleUrls: ['./obtener-personaje.component.css']
})
export class ObtenerPersonajeComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private datosServicio:DatosService) {
    this.nombre = this.route.snapshot.params['nombre'];
   }

  nombre!:string;
  imagenUrl!:string;
  experiencia!:string;
  altura!:string;
  peso!:string
  habilidades:string[] = [];

  ngOnInit(): void {
    this.nombre = this.route.snapshot.params['nombre'];
    this.buscarPokemon();
    
  }

  buscarPokemon(){
    this.nombre = this.route.snapshot.params['nombre'];
    this.datosServicio.buscarPokemon(this.nombre)
    .subscribe((datos:any) =>{
      this.imagenUrl = datos.sprites.front_default,
      this.experiencia = datos.base_experience,
      this.altura = datos.height,
      this.peso = datos.weight
      datos.abilities.forEach((habilidad: any) =>{
      this.habilidades.push(habilidad.ability.name);
      })
      })   
    }
  

  irAHome(){
    this.router.navigate([''])
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {

  }

  nombre:string="";

}

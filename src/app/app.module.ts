import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { DatosService } from './services/datos.service';
import { ObtenerPersonajeComponent } from './obtener-personaje/obtener-personaje.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'detalles/:nombre', component: ObtenerPersonajeComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    PersonajeComponent,
    HeaderComponent,
    ObtenerPersonajeComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

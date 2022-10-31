import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Models/Persona';
import { PersonaService } from '../../service/persona.service';
import { Router } from '@angular/router';
import { Usuario } from '../../Models/Usuario';
import { AllService } from '../../service/all.service';
import { ListaPer, ListaUsu } from '../../data/alldata';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  datosPersona: Persona | undefined;
  datosUsuario: Usuario | undefined;
  //injectamos un servicio dentro del componente
  constructor( private router: Router /*,private personaservice: PersonaService, private allservice: AllService*/) { }
  bandera: boolean=false;
  
  ngOnInit(): void {
    this.cargarDatos();
  }
  irA(dir:string):void{
    this.router.navigate([dir]);
  }
  cargarDatos():void{
    this.datosPersona=ListaPer[0];
    this.datosUsuario=ListaUsu[0];
  }
  /*cargarPersona(): void{
    this.allservice.getPersona().subscribe(
      //aqui devuelve una lista creamos una variable que es la respuesta del servicio
      response => {console.log(response);
        this.datosPersona = response[0] as Persona;
        console.log(this.datosPersona);
      }
    )
  }
  cargarUsuario(): void{
    this.allservice.getUsuario().subscribe(
      //aqui devuelve una lista creamos una variable que es la respuesta del servicio
      response => {console.log(response);
        this.datosUsuario = response[0] as Usuario;
        console.log(this.datosPersona);
      }
    )
  }*/
}

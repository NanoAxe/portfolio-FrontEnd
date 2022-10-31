import { Component, OnInit } from '@angular/core';
import { listaHab } from 'src/app/data/alldata';
import { Habilidad } from 'src/app/Models/Habilidad';
import { Proyecto } from 'src/app/Models/Proyecto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  lista: Habilidad[]=[];
  edu: Habilidad | undefined;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.cargarLista();
  }

    cargarLista():void{
    this.lista=listaHab;
  }
  irA():void{
    this.router.navigate(['formularioHab']);
  }
  enviarA(hab:Habilidad):void{
    this.router.navigate(['formularioHab',hab.id_H]);
  }
  eliminar(id: number | undefined):void{
    let pos=listaHab.findIndex(e => e.id_H==id);
    listaHab.splice(pos,1);
    this.cargarLista();
  }
}

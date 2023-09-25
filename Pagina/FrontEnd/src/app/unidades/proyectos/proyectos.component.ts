import { Component, OnInit } from '@angular/core';
import { listaPj } from 'src/app/data/alldata';
import { Proyecto } from 'src/app/Models/Proyecto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  lista: Proyecto[]=[];
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.cargarLista();
  }

  cargarLista():void{
    this.lista=listaPj;
  }

  irA():void{
    this.router.navigate(['formularioPj']);
  }
  enviarA(pj:Proyecto):void{
    this.router.navigate(['formularioPj',pj.id_P]);
  }
  eliminar(id: number | undefined):void{
    let pos=listaPj.findIndex(e => e.id_P==id);
    listaPj.splice(pos,1);
    this.cargarLista();
  }
}

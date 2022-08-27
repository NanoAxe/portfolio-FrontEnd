import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  listaExp: Proyecto[] = [];
  pj: Proyecto;
  constructor() {
    this.pj = new Proyecto;
  }

  ngOnInit(): void {
    this.cargarLista();
  }
  cargarLista(): void{
    console.log("cargando lista");
    this.listaExp = PROYECTOS;
  }
}
const PROYECTOS: Proyecto []=[
  {id:1, puesto:"Progresar", lugar: "panchamama", periodo:"23/12/1999", descripcion:"realizar el cobro de los pedidos"},
  {id:2, puesto:"Plan_Fuegos_Artificiales", lugar: "panchamama", periodo:"5/02/2000", descripcion:"Realizar contabilidad y administrar el local"},
  {id:3, puesto:"Breakdance", lugar: "panchamama", periodo:"20/11/2000", descripcion:"Supervisar el inventario y el trabajo del personal"},
  {id:4, puesto:"Mesopotamia", lugar: "panchamama", periodo:"24/01/1999", descripcion:"Recibir a los clientes, presentarles el menu y tomar pedidos"}
]
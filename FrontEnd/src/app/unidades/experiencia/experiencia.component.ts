import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  listaExp: Experiencia[] = [];
  exp: Experiencia;
  constructor() { 
    this.exp = new Experiencia;
  }

  ngOnInit(): void {
    this.cargarLista();
  }
  cargarLista(): void{
    console.log("cargando lista");
    this.listaExp = EXPERIENCIA;
  }
}
const EXPERIENCIA: Experiencia []=[
  {id:1, puesto:"cajero", lugar: "panchamama", periodo:"23/12/1999", descripcion:"realizar el cobro de los pedidos"},
  {id:2, puesto:"gerente", lugar: "panchamama", periodo:"5/02/2000", descripcion:"Realizar contabilidad y administrar el local"},
  {id:3, puesto:"supervisor", lugar: "panchamama", periodo:"20/11/2000", descripcion:"Supervisar el inventario y el trabajo del personal"},
  {id:4, puesto:"mesero", lugar: "panchamama", periodo:"24/01/1999", descripcion:"Recibir a los clientes, presentarles el menu y tomar pedidos"}
]
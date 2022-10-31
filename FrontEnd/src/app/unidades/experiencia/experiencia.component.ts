import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/Models/Experiencia';
import { listaExp } from '../../data/alldata';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  lista: Experiencia[]= [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.cargarLista();
  }

  cargarLista(): void{
    this.lista=listaExp;
  }

  irA():void{
    this.router.navigate(['formularioExp']);
  }
  enviarA(exp:Experiencia):void{
    this.router.navigate(['formularioExp',exp.id_X]);
  }
  eliminar(id: number | undefined):void{
    let pos=listaExp.findIndex(e => e.id_X==id);
    listaExp.splice(pos,1);
    this.cargarLista();
  }

}

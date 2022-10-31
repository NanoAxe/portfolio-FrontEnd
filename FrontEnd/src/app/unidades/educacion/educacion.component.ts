import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/Models/Educacion';
import { listaEdu } from '../../data/alldata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  lista: Educacion[]=[];
  edu: Educacion | undefined;
  constructor(private router:Router) {}

  ngOnInit(): void {
    this.cargarLista();
    console.log(this.lista);
  }

  cargarLista(): void{
    this.lista=listaEdu;
  }
  irA():void{
    this.router.navigate(['formularioEdu']);
  }
  enviarA(edu:Educacion):void{
    this.router.navigate(['formularioEdu',edu.id_E]);
  }
  eliminar(id: number | undefined):void{
    let pos=listaEdu.findIndex(e => e.id_E==id);
    listaEdu.splice(pos,1);
    this.cargarLista();
  }

}

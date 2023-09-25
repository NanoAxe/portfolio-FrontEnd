import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/models/Proyectos';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{

  bLog: boolean = false;
  bForms: boolean = false;
  pjList: Proyectos[] | undefined;
  selectedPj?: Proyectos;

  constructor(
    private pjS: ProyectoService,
    private controlLogin: SwitchService
    ){}
  
    ngOnInit(): void {
    this.getPjs();
    this.controlLogin.$logueo.subscribe((valor: boolean) => {
      this.bLog=valor;
    });
  }

  openForm(): void {
    this.bForms = true;
  }

  cerrar() {
    this.bForms = false;
  }

  getPjs(): void {
    this.pjS.getBy(1).subscribe(response =>{
      this.pjList = response;
      console.log(response)
    });

  }

  openEditForm(pj: any) {
    this.selectedPj = pj;
  }

  deleteItem(idPj: number){
    this.pjS.delete(idPj).subscribe(response => {
      console.log(response);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Experiencias } from 'src/app/models/Experiencias';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{

  selectedExp?: Experiencias;
  bLog: boolean = false;
  bForms: boolean = false;
  listaPrueba: number[] = [1,2,3];
  expLista: Experiencias[] | undefined;

  constructor(private expS: ExperienciaService,
    private controlLogin: SwitchService){}

  ngOnInit(): void {
    this.getExp();
    this.controlLogin.$logueo.subscribe((valor: boolean) => {
      this.bLog=valor;
    });
  }

  openForm(): void{
    this.bForms=true;
  }

  cerrar(){
    this.bForms=false;
  }

  openEditForm(exp: any) {
    this.selectedExp = exp;
  }

  deleteItem(idExp: number){
    this.expS.delete(idExp).subscribe(response => {
      console.log(response);
    });;
  }

  getExp(): void {
    this.expS.getBy(1).subscribe(response =>{
      this.expLista = response;
    });
  }

}

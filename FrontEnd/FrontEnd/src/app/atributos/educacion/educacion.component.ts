import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  listaPrueba:number[] = [1,2,3,4,5];
  bLog: boolean = false;
  bForms: boolean = false;
  eduList: Educacion[] | undefined;
  selectedEd?: Educacion;
  constructor(
    private eduS: EducacionService,
    private controlLogin: SwitchService
    ){}

  ngOnInit(): void {
    this.getEdus();
    this.controlLogin.$logueo.subscribe((valor: boolean) => {
      this.bLog=valor;
    });
  }

  openEditForm(ed: any) {
    this.selectedEd = ed;
  }

  deleteItem(idEd: number){
    this.eduS.delete(idEd).subscribe(response => {
      console.log(response);
    });;
  }

  openForm():void{
    this.bForms = true;
  }
  cerrar(){
    this.bForms=false;
  }

  getEdus(): void {
    this.eduS.getBy(1).subscribe(response => {
      this.eduList = response;
    });
  }
}

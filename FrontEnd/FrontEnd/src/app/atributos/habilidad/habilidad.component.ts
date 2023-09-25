import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Habilidades } from 'src/app/models/Habilidades';
import { HabilidadService } from 'src/app/services/habilidad.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {

  bLog: boolean = false;
  bForms: boolean = false;
  skillList: Habilidades[] | undefined;
  selectedSkill?: Habilidades;
  end: string[] = ["principiante", "intermedio", "avanzado", "experto", "principiante", "intermedio"];


  constructor(
    private skillS: HabilidadService,
    private controlLogin: SwitchService
  ) { }

  ngOnInit(): void {
    this.getSkills();
    this.controlLogin.$logueo.subscribe((valor: boolean) => {
      this.bLog = valor;
    });
  }

  openForm(): void {
    this.bForms = true;
  }

  cerrar() {
    this.bForms = false;
  }

  getSkills(): void {
    this.skillS.getBy(1).subscribe(response => {
      this.skillList = response;
    });
  }

  openEditForm(skill: any) {
    this.selectedSkill = skill;
  }

  deleteItem(id_H: number){
    this.skillS.delete(id_H).subscribe(response => {
      console.log(response);
    });
  }
}

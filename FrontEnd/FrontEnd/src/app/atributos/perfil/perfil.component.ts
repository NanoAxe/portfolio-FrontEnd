import { Component, OnInit } from '@angular/core';
import { Perfiles } from 'src/app/models/Perfiles';
import { PerfilesService } from 'src/app/services/perfiles.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  bLog: boolean = false;
  bForms: boolean = false;
  perfil!: Perfiles;
  
  constructor(
    private perfilS: PerfilesService,
    private controlLogin: SwitchService
  ){}
  ngOnInit(): void {
    this.getPerfil();
    this.controlLogin.$logueo.subscribe((valor: boolean) => {
      this.bLog = valor;
    });
  }

  getPerfil(): void{
    this.perfilS.getPerfiles().subscribe(response => {
      this.perfil = response[0];
      console.log(response);
    });
    if(this.perfil!=null){
      console.log("Perfil encontrado")
    }
  }

  openForm(): void{
    this.bForms=true;
  }

  cerrar(){
    this.bForms=false;
  }

}


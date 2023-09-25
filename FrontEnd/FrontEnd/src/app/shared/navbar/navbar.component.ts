import { Component,OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  log:boolean = false;

  constructor( private controlLogin: SwitchService){}

  ngOnInit(){
    this.controlLogin.$logueo.subscribe((valor:boolean)=>{
      this.log=valor;
    })
  }

  login(){
    this.controlLogin.$bandera.emit(true);
  }

  deslogin(){
    this.controlLogin.$logueo.emit(false);
  }

}

import { Component,OnInit } from '@angular/core';
import { SwitchService } from '../services/switch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  bandera:boolean = false;
  bForms:string = "";

  constructor(private controlLogin: SwitchService){}

  ngOnInit(){
    this.controlLogin.$bandera.subscribe((valor: boolean) => {
      this.bandera=valor;
    });
    this.controlLogin.$bForms.subscribe((valor: string) => {
      this.bForms=valor;
    });
  }

  cerrar(){
    this.controlLogin.$bandera.emit(false);
  }


}

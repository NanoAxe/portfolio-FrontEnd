import { Component, OnInit } from '@angular/core';
import { Domicilio } from 'src/app/Models/Domicilio';
import { ListaDom } from '../../data/alldata';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  datosDomicilio:Domicilio | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  cargarDatos():void{
    this.datosDomicilio=ListaDom[0];
  }
}

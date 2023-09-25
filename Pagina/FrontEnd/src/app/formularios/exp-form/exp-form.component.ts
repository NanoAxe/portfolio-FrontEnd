import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Experiencia } from 'src/app/Models/Experiencia';
import { listaExp } from '../../data/alldata';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exp-form',
  templateUrl: './exp-form.component.html',
  styleUrls: ['./exp-form.component.css']
})
export class ExpFormComponent implements OnInit {

  lista:Experiencia[]=[];
  exp:Experiencia | undefined;
  id:number | undefined;
  form!:FormGroup;

  constructor(private router: Router, private activateroute: ActivatedRoute) { 
    this.id= activateroute.snapshot.params['id'];
    this.cargarDatosForm();
  }
  
  ngOnInit(): void {
  this.cargarLista;
  }

  cargarLista(): void{
    this.lista=listaExp;
  }

  guardar(): void{
    if(this.id){
      let pos=listaExp.findIndex(e => e.id_X==this.id);
      listaExp[pos].lugar=this.form.value.organizacion;
      listaExp[pos].puesto=this.form.value.puesto;
      listaExp[pos].descripcion=this.form.value.descripcion;
      listaExp[pos].periodo_i=this.form.value.periodo_i;
      listaExp[pos].periodo_f=this.form.value.periodo_f;
    }else{
      this.exp={id_X:this.lista.length, puesto:this.form.value.puesto, logo_org: "experiencia.png", periodo_i:this.form.value.periodo_i,
    periodo_f:this.form.value.periodo_f, descripcion:this.form.value.descripcion, id_u:1, lugar:this.form.value.organizacion }
    listaExp.push(this.exp);
    }
    this.irA();
  }
  irA():void{
    this.router.navigate(['experiencia']);
  }
  cargarDatosForm(){
    this.exp=listaExp.find(e => e.id_X==this.id);
    this.form = this.crearFormGroup();
  }
  crearFormGroup():FormGroup{
    return new FormGroup({
      periodo_i: new FormControl(this.exp?.periodo_i),
      periodo_f: new FormControl(this.exp?.periodo_f),
      organizacion: new FormControl(this.exp?.lugar),
      puesto: new FormControl(this.exp?.puesto),
      descripcion: new FormControl(this.exp?.descripcion),
    });
  }

}

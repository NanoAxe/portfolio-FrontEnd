import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/Models/Proyecto';
import { FormGroup, FormControl } from '@angular/forms';
import { listaPj } from 'src/app/data/alldata';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pj-form',
  templateUrl: './pj-form.component.html',
  styleUrls: ['./pj-form.component.css']
})
export class PjFormComponent implements OnInit {

  lista:Proyecto[]=[];
  pj:Proyecto | undefined;
  id:number | undefined;
  form!:FormGroup;

  constructor(private router: Router, private activateroute: ActivatedRoute) {
    this.id= activateroute.snapshot.params['id'];
    this.cargarLista();
   }

  ngOnInit(): void {
    this.cargarDatosForm();
  }
  cargarLista():void{
    this.lista=listaPj;
  }

  irA():void{
    this.router.navigate(['proyectos']);
  }
  cargarDatosForm(){
    this.pj=this.lista.find(e => e.id_P==this.id);
    this.form = this.crearFormGroup();
  }
  crearFormGroup():FormGroup{
    return new FormGroup({
      periodo_i: new FormControl(this.pj?.periodo_i),
      periodo_f: new FormControl(this.pj?.periodo_f),
      nombre: new FormControl(this.pj?.nombre),
      descripcion: new FormControl(this.pj?.descripcion),
      pruebas: new FormControl(this.pj?.pruebas),
    });
  }  
  guardar(): void{
    if(this.id){
      let pos=listaPj.findIndex(e => e.id_P==this.id);
      listaPj[pos].nombre=this.form.value.nombre;
      listaPj[pos].descripcion=this.form.value.descripcion;
      listaPj[pos].periodo_i=this.form.value.periodo_i;
      listaPj[pos].periodo_f=this.form.value.periodo_f;
      listaPj[pos].pruebas=this.form.value.pruebas;
    }else{
      this.pj={id_P:this.lista.length, nombre:this.form.value.nombre, logo_pj: "proyecto.png", periodo_i:this.form.value.periodo_i,
    periodo_f:this.form.value.periodo_f, id_u:1, descripcion:this.form.value.descripcion, pruebas:this.form.value.pruebas }
    listaPj.push(this.pj);
    }
    this.irA();
  }

}

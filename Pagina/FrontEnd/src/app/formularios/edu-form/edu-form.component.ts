import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { listaEdu } from 'src/app/data/alldata';
import { Educacion } from 'src/app/Models/Educacion';

@Component({
  selector: 'app-edu-form',
  templateUrl: './edu-form.component.html',
  styleUrls: ['./edu-form.component.css']
})
export class EduFormComponent implements OnInit {

  lista:Educacion[]=[];
  edu:Educacion | undefined;
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
    this.lista=listaEdu;
  }

  irA():void{
    this.router.navigate(['']);
  }
  cargarDatosForm(){
    this.edu=this.lista.find(e => e.id_E==this.id);
    this.form = this.crearFormGroup();
  }
  crearFormGroup():FormGroup{
    return new FormGroup({
      periodo_i: new FormControl(this.edu?.periodo_i),
      periodo_f: new FormControl(this.edu?.periodo_f),
      institucion: new FormControl(this.edu?.institucion),
      titulo: new FormControl(this.edu?.titulo)
    });
  }  
  guardar(): void{
    if(this.id){
      let pos=listaEdu.findIndex(e => e.id_E==this.id);
      listaEdu[pos].institucion=this.form.value.institucion;
      listaEdu[pos].titulo=this.form.value.titulo;
      listaEdu[pos].periodo_i=this.form.value.periodo_i;
      listaEdu[pos].periodo_f=this.form.value.periodo_f;
    }else{
      this.edu={id_E:this.lista.length, titulo:this.form.value.titulo, img_insti: "educacion.png", periodo_i:this.form.value.periodo_i,
    periodo_f:this.form.value.periodo_f, id_u:1, institucion:this.form.value.institucion }
    listaEdu.push(this.edu);
    }
    this.irA();
  }
}

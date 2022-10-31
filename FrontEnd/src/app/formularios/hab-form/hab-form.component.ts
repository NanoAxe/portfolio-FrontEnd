import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Habilidad } from '../../Models/Habilidad';
import { FormGroup, FormControl } from '@angular/forms';
import { listaHab } from '../../data/alldata';

@Component({
  selector: 'app-hab-form',
  templateUrl: './hab-form.component.html',
  styleUrls: ['./hab-form.component.css']
})
export class HabFormComponent implements OnInit {

  lista:Habilidad[]=[];
  hab:Habilidad | undefined;
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
    this.lista=listaHab;
  }

  irA():void{
    this.router.navigate(['habilidad']);
  }
  cargarDatosForm(){
    this.hab=this.lista.find(e => e.id_H==this.id);
    this.form = this.crearFormGroup();
  }
  crearFormGroup():FormGroup{
    return new FormGroup({
      descripcion: new FormControl(this.hab?.descripcion),
      nivel: new FormControl(this.hab?.nivel),
    });
  }  
  guardar(): void{
    console.log(this.form)
    if(this.id){
      let pos=listaHab.findIndex(e => e.id_H==this.id);
      listaHab[pos].descripcion=this.form.value.descripcion;
      listaHab[pos].nivel=this.form.value.nivel;
    }else{
      this.hab={id_H:this.lista.length, id_u:1,
         descripcion:this.form.value.descripcion, nivel:this.form.value.nivel }
    listaHab.push(this.hab);
    }
    this.irA();
  }

}

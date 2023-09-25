import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { URL_BACKEND } from 'src/app/config/config';
import { Educacion } from 'src/app/models/Educacion';
import { Usuarios } from 'src/app/models/Usuarios';
import { EducacionService } from 'src/app/services/educacion.service';
import { FilesService } from 'src/app/services/files.service';
import { SwitchService } from 'src/app/services/switch.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-educacion-form',
  templateUrl: './educacion-form.component.html',
  styleUrls: ['./educacion-form.component.css']
})
export class EducacionFormComponent implements OnInit {

  private urlEndPoint: string = URL_BACKEND;
  form!: FormGroup;
  file!: File;
  educacion: Educacion | undefined;
  @Input() selectedEd?: Educacion;
  user: Usuarios | undefined;
  
  constructor(
    private eduService: EducacionService,
    private fileService: FilesService,
    private userServices: UsuariosService
  ) { }

  ngOnInit(): void {
    this.form = this.createFormGroup();
    this.userServices.getUsuario(1).subscribe(response => {
      this.user = response;
    });
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      institucion: new FormControl(this.selectedEd?.institucion),
      titulo: new FormControl(this.selectedEd?.titulo),
      PI: new FormControl(this.selectedEd?.inicio),
      PF: new FormControl(this.selectedEd?.fin)
    })
  }

  capturar(event: any): void {
    const archivoCapturado = event.target.files[0];
    this.file = archivoCapturado;
    console.log(this.file);
  }

  subirArchivo(): any {
    this.fileService.create(this.file!).subscribe(response => {
      console.log(response);
    });
  }

  preparar(): void {
    if (this.file != null) {
      this.educacion = {
        institucion: this.form.value.institucion,
        titulo: this.form.value.titulo,
        inicio: this.form.value.PI,
        fin: this.form.value.PF,
        iconoIns: this.file.name,
        dirIcono: this.urlEndPoint + "/files/" + this.file.name,
        user: this.user
      }
      this.subirArchivo();
    } else {
      this.educacion = {
        institucion: this.form.value.institucion,
        titulo: this.form.value.titulo,
        inicio: this.form.value.PI,
        fin: this.form.value.PF,
        iconoIns: "education.png",
        dirIcono: "../../../assets/Imagenes/education.png",
        user: this.user
      }
    }
    if(this.selectedEd == null){this.create()}else{this.update}

  }

  create(){   
     this.eduService.create(this.educacion!).subscribe(response => {
    console.log(response);
  }
  );}
  update(){   
     this.eduService.update(this.educacion!,this.educacion?.idEdu!).subscribe(response => {
    console.log(response);
  }
  );}

}

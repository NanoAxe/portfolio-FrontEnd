import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { URL_BACKEND } from 'src/app/config/config';
import { Experiencias } from 'src/app/models/Experiencias';
import { Usuarios } from 'src/app/models/Usuarios';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { FilesService } from 'src/app/services/files.service';
import { SwitchService } from 'src/app/services/switch.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-exp-form',
  templateUrl: './exp-form.component.html',
  styleUrls: ['./exp-form.component.css']
})
export class ExpFormComponent implements OnInit {
   
  @Input() selectedExp?: Experiencias;
  private urlEndPoint: string = URL_BACKEND;
  form!: FormGroup;
  file!: File;
  exp: Experiencias | undefined;
  user: Usuarios | undefined;

  constructor(
    private expService: ExperienciaService,
    private fileService: FilesService,
    private userServices: UsuariosService
  ){}

   ngOnInit(): void {
     this.form = this.createFormGroup();
     this.userServices.getUsuario(1).subscribe(response => {
      this.user = response;
    });
   }

   createFormGroup(): FormGroup {
    return new FormGroup({
      lugar: new FormControl(this.selectedExp?.lugar),
      puesto: new FormControl(this.selectedExp?.puesto),
      descripcion: new FormControl(this.selectedExp?.descripcion),
      PI: new FormControl(this.selectedExp?.periodoI),
      PF: new FormControl(this.selectedExp?.periodoF)
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
      this.exp = {
        lugar: this.form.value.lugar,
        puesto: this.form.value.puesto,
        periodoI: this.form.value.PI,
        periodoF: this.form.value.PF,
        descripcion: this.form.value.descripcion,
        logo_org: this.file.name,
        dirLogo: this.urlEndPoint + "/files/" + this.file.name,
        user: this.user
      }
      this.subirArchivo();
    } else {
      this.exp = {
        lugar: this.form.value.institucion,
        puesto: this.form.value.titulo,
        descripcion: this.form.value.descripcion,
        periodoI: this.form.value.PI,
        periodoF: this.form.value.PF,
        logo_org: "experience.png",
        dirLogo: "../../../assets/Imagenes/experience.png",
        user: this.user
      }
    }
    if(this.selectedExp == null){this.create()}else{this.update}
  }

  create(){
    this.expService.create(this.exp!).subscribe(response => {
    console.log(response);
  }
  );}
  update(){
  this.expService.update(this.exp!, this.exp?.idExp!).subscribe(response => {
  console.log(response);
  }
  );}

}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { URL_BACKEND } from 'src/app/config/config';
import { Proyectos } from 'src/app/models/Proyectos';
import { Usuarios } from 'src/app/models/Usuarios';
import { FilesService } from 'src/app/services/files.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { SwitchService } from 'src/app/services/switch.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-pj-form',
  templateUrl: './pj-form.component.html',
  styleUrls: ['./pj-form.component.css']
})
export class PjFormComponent implements OnInit {

  private urlEndPoint: string = URL_BACKEND;
  @Input() selectedPj?: Proyectos;
  form!: FormGroup;
  file!: File;
  pj!: Proyectos;
  user: Usuarios | undefined;


  constructor(
    private pjService: ProyectoService,
    private fileService: FilesService,
    private userServices: UsuariosService,
  ) { }

  ngOnInit(): void {
    this.form = this.createFormGroup();
    this.userServices.getUsuario(1).subscribe(response => {
      this.user = response;
    });
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      proyecto: new FormControl(this.selectedPj?.proyecto),
      enlace: new FormControl(this.selectedPj?.enlace),
      descripcion: new FormControl(this.selectedPj?.descripcion),
      PI: new FormControl(this.selectedPj?.fechaI),
      PF: new FormControl(this.selectedPj?.fechaF)
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
      this.pj = {
        proyecto: this.form.value.proyecto,
        enlace: this.form.value.enlace,
        fechaI: this.form.value.PI,
        fechaF: this.form.value.PF,
        descripcion: this.form.value.descripcion,
        iconoPj: this.file.name,
        dirIconoPj: this.urlEndPoint + "/files/" + this.file.name,
        user: this.user
      }
      this.subirArchivo();
    } else {
      this.pj = {
        proyecto: this.form.value.proyecto,
        enlace: this.form.value.enlace,
        fechaI: this.form.value.PI,
        fechaF: this.form.value.PF,
        descripcion: this.form.value.descripcion,
        iconoPj: "projects.png",
        dirIconoPj: "../../../assets/Imagenes/projects.png",
        user: this.user
      }
    }
    if (this.selectedPj == null) { this.create() } else { this.update }
  }

  create() {
    this.pjService.create(this.pj).subscribe(response => {
      console.log(response);
    });
  }
  update() {
    this.pjService.update(this.pj, this.pj.idPj!).subscribe(response => {
      console.log(response);
    });
  }

}

import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { URL_BACKEND } from 'src/app/config/config';
import { Perfiles } from 'src/app/models/Perfiles';
import { Usuarios } from 'src/app/models/Usuarios';
import { FilesService } from 'src/app/services/files.service';
import { PerfilesService } from 'src/app/services/perfiles.service';
import { SwitchService } from 'src/app/services/switch.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent {
  
    @Input() perfil?: Perfiles;

  private urlEndPoint: string = URL_BACKEND;
  form!: FormGroup;
  imgBanner!: File;
  imgPerfil!: File;
  user: Usuarios | undefined;

  constructor(
    private perfilService: PerfilesService,
    private fileService: FilesService,
    private userServices: UsuariosService
  ) { }

  ngOnInit(): void {
    this.form = this.createFormGroup();
    this.userServices.getUsuario(1).subscribe(response => {
      this.user = response;
    });
    console.log(this.user);
    console.log(this.perfil);
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      nombre: new FormControl(this.perfil?.nombre),
      titulo: new FormControl(this.perfil?.titulo),
      aboutMe: new FormControl(this.perfil?.aboutMe),
    })
  }

  capturarPerfil(event: any): void {
    const archivoCapturado = event.target.files[0];
    this.imgPerfil = archivoCapturado;
  }
  capturarBanner(event: any): void {
    const archivoCapturado = event.target.files[0];
    this.imgBanner = archivoCapturado;
  }

  subirArchivo(): void {
    this.fileService.create(this.imgPerfil).subscribe(response => {
      console.log(response);
    });
  }

  update() {
    this.perfil = {
      nombre: this.form.value.nombre,
      titulo: this.form.value.titulo,
      aboutMe: this.form.value.aboutMe,
      user: this.user
    }
    if (this.imgBanner == null && this.imgPerfil == null) {
      this.perfil.banner = "banner.jpg",
        this.perfil.dirBanner = "../../../assets/Imagenes/education.png",
        this.perfil.dirFoto = "../../../assets/Imagenes/education.png",
        this.perfil.foto = "perfil.png"
    }
    if (this.imgBanner != null) {
      this.perfil.banner = this.imgBanner.name,
        this.perfil.dirBanner = this.urlEndPoint + "/files/" + this.imgBanner.name
    }
    if (this.imgPerfil != null) {
      this.perfil.foto = this.imgPerfil.name,
        this.perfil.dirFoto = this.urlEndPoint + "/files/" + this.imgPerfil.name
    }
    this.perfilService.updatePerfil(this.perfil, this.perfil.idPerfil!).subscribe(response => {
      console.log(response);
    }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuarios } from 'src/app/models/Usuarios';
import { SwitchService } from 'src/app/services/switch.service';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.component.html',
  styleUrls: ['./logueo.component.css']
})
export class LogueoComponent implements OnInit{

  form!: FormGroup;
  user: Usuarios | undefined;

  constructor(
    private userServices: UsuariosService,
    private controlLogin:SwitchService
  ){}

  ngOnInit(): void {
    this.form = this.createFormGroup();
    this.userServices.getUsuario(1).subscribe(response => {
      this.user = response;
    });
  }

  logear(): void {
    if(this.form.value.usuario == this.user?.usuario &&
      this.form.value.contraseña == this.user?.contraseña){
        this.controlLogin.$logueo.emit(true);
        this.controlLogin.$bandera.emit(false);
      }else{
        alert("Correo, usuario o contraseño incorrectas"
        );
      }
    }

  createFormGroup(): FormGroup {
    return new FormGroup({
      usuario: new FormControl(),
      contraseña: new FormControl(),
    })
  }

}

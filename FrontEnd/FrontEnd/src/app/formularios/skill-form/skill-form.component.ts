import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { URL_BACKEND } from 'src/app/config/config';
import { Habilidades } from 'src/app/models/Habilidades';
import { Usuarios } from 'src/app/models/Usuarios';
import { FilesService } from 'src/app/services/files.service';
import { HabilidadService } from 'src/app/services/habilidad.service';
import { SwitchService } from 'src/app/services/switch.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css']
})
export class SkillFormComponent implements OnInit {
  private urlEndPoint: string = URL_BACKEND;
  form!: FormGroup;
  file!: File;
  skill: Habilidades | undefined;
  user: Usuarios | undefined;
  @Input() selectedSkill?: Habilidades;

  constructor(
    private habService: HabilidadService,
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
      nivel: new FormControl(this.selectedSkill?.nivel),
      descripcion: new FormControl(this.selectedSkill?.descripcion),
    })
  }


  preparar(): void {
    this.skill = {
      nivel: this.form.value.nivel,
      descripcion: this.form.value.descripcion,
      user: this.user
    }
    if (this.selectedSkill == null) { this.create(); } else { this.update(); }
    alert("Elemento guardado");
  }

  create() {
    this.habService.create(this.skill!).subscribe(response => {
      console.log(response);
    }
    );
  }

  update() {
    this.habService.update(this.skill!, this.selectedSkill?.id_H!).subscribe(response => {
      console.log(response);
    });

  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogueoComponent } from './logueo/logueo.component';
import { ExpFormComponent } from './exp-form/exp-form.component';
import { SkillFormComponent } from './skill-form/skill-form.component';
import { PjFormComponent } from './pj-form/pj-form.component';
import { EducacionFormComponent } from './educacion-form/educacion-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilFormComponent } from './perfil-form/perfil-form.component';


@NgModule({
  declarations: [
    LogueoComponent,
    ExpFormComponent,
    SkillFormComponent,
    PjFormComponent,
    EducacionFormComponent,
    PerfilFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    LogueoComponent,
    ExpFormComponent,
    SkillFormComponent,
    PjFormComponent,
    EducacionFormComponent,
    PerfilFormComponent
  ]
})
export class FormulariosModule { }

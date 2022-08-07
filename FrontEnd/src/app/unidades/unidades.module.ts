import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnidadesComponent } from './unidades.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjetsComponent } from './projets/projets.component';



@NgModule({
  declarations: [
    UnidadesComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProjetsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UnidadesComponent
  ]
})
export class UnidadesModule { }

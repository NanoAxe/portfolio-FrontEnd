import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';



@NgModule({
  declarations: [
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    HabilidadesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    HabilidadesComponent
  ]
})
export class UnidadesModule { }

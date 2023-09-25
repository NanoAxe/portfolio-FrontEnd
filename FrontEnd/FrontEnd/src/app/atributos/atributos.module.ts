import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadComponent } from './habilidad/habilidad.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FormulariosModule } from '../formularios/formularios.module';


@NgModule({
  declarations: [
    EducacionComponent,
    HabilidadComponent,
    ExperienciaComponent,
    ProyectosComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    FormulariosModule
  ],
  exports: [
    EducacionComponent,
    HabilidadComponent,
    ExperienciaComponent,
    ProyectosComponent,
    PerfilComponent
  ]
})
export class AtributosModule { }

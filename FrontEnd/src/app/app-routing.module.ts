import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EduFormComponent } from './formularios/edu-form/edu-form.component';
import { ExpFormComponent } from './formularios/exp-form/exp-form.component';
import { EducacionComponent } from './unidades/educacion/educacion.component';
import { ExperienciaComponent } from './unidades/experiencia/experiencia.component';
import { HabilidadesComponent } from './unidades/habilidades/habilidades.component';
import { ProyectosComponent } from './unidades/proyectos/proyectos.component';
import { PjFormComponent } from './formularios/pj-form/pj-form.component';
import { HabFormComponent } from './formularios/hab-form/hab-form.component';

const routes: Routes = [
  {path:'', component:EducacionComponent},
  {path:'educacion', redirectTo:''},
  {path:'experiencia', component:ExperienciaComponent},
  {path:'habilidad', component:HabilidadesComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'formularioExp', component:ExpFormComponent},
  {path:'formularioExp/:id', component:ExpFormComponent},
  {path:'formularioEdu', component:EduFormComponent},
  {path:'formularioEdu/:id', component:EduFormComponent},
  {path:'formularioPj', component:PjFormComponent},
  {path:'formularioPj/:id', component:PjFormComponent},
  {path:'formularioHab', component:HabFormComponent},
  {path:'formularioHab/:id', component:HabFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

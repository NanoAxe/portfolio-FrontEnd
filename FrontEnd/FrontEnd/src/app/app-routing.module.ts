import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LogueoComponent } from './formularios/logueo/logueo.component';
import { EducacionComponent } from './atributos/educacion/educacion.component';
import { ProyectosComponent } from './atributos/proyectos/proyectos.component';
import { ExperienciaComponent } from './atributos/experiencia/experiencia.component';
import { HabilidadComponent } from './atributos/habilidad/habilidad.component';

const routes: Routes = [
  {path: '', component: LogueoComponent},
  {path: 'educacion', component:EducacionComponent},
  {path: 'proyecto', component:ProyectosComponent},
  {path: 'experiencia', component:ExperienciaComponent},
  {path: 'habilidad', component:HabilidadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

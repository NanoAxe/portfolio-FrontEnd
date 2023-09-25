import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpFormComponent } from './exp-form/exp-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EduFormComponent } from './edu-form/edu-form.component';
import { PjFormComponent } from './pj-form/pj-form.component';
import { HabFormComponent } from './hab-form/hab-form.component';

@NgModule({
  declarations: [
    ExpFormComponent,
    EduFormComponent,
    PjFormComponent,
    HabFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[]
})
export class FormulariosModule { }

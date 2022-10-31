import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UnidadesModule } from './unidades/unidades.module';
import { FormulariosModule } from './formularios/formularios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UnidadesModule,
    FormulariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

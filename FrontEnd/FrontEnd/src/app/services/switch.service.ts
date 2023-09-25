import { EventEmitter, Injectable } from '@angular/core';
import { Usuarios } from '../models/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

/*   UsuarioLogueado: boolean= false; */

  constructor() { }

  /*Creamos un observable, un objeto q sabremos que valor tiene en cada momento
  - el simbolo $ es por buenas practicas
  - de la clase eventemitter de angular/core
  - es utilizado en los inputs y outputs
  */
  $bandera = new EventEmitter<boolean>();
  $logueo = new EventEmitter<boolean>();
  $bForms = new EventEmitter<string>();
}

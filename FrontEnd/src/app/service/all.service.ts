import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_BACKEND } from '../config/config';
import { Persona } from 'src/app/Models/Persona';
import { Usuario } from '../Models/Usuario';
import { Domicilio } from '../Models/Domicilio';
import { Educacion } from '../Models/Educacion';
import { Experiencia } from '../Models/Experiencia';
import { Habilidad } from '../Models/Habilidad';
import { Proyecto } from '../Models/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class AllService {
  private URLEndPoint: string = URL_BACKEND;

  constructor(private http : HttpClient) { }

  getPersona(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.URLEndPoint+'/persona');
  }
  getUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.URLEndPoint+'/usuario');
  }
  getDomicilio(): Observable<Domicilio[]>{
    return this.http.get<Domicilio[]>(this.URLEndPoint+'/domicilio');
  }
  getEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.URLEndPoint+'/educacion');
  }
  getExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.URLEndPoint+'/exp');
  }
  getHabilidad(): Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(this.URLEndPoint+'/skill');
  }
  getProjectos(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.URLEndPoint+'/pj');
  }
}

import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Perfiles } from '../models/Perfiles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {
  private urlEndPoint: string = URL_BACKEND +'/perfil';
  constructor(private http: HttpClient) {}

  getPerfiles(): Observable<Perfiles[]>{
    return this.http.get<Perfiles[]>(this.urlEndPoint);
  }

  getPerfil(id: number): Observable<Perfiles>{
    return this.http.get<Perfiles>(this.urlEndPoint + '/' + id)
  }

  crearPerfil(perfil: Perfiles): Observable<any>{
    return this.http.post(this.urlEndPoint, perfil);
  }

  updatePerfil(perfil: Perfiles, id: number): Observable<any>{
    return this.http.put(this.urlEndPoint + '/' + id, perfil);
  }

  deletePerfil(id:number): Observable<any>{
    return this.http.delete(this.urlEndPoint + '/' + id);
  }
}

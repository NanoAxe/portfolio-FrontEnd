import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Proyectos } from '../models/Proyectos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private urlEndPoint: string = URL_BACKEND+'/proyecto';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.urlEndPoint);
  }

  getBy(id: number): Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.urlEndPoint + 'By/' + id)
  }

  get(id: number): Observable<Proyectos>{
    return this.http.get<Proyectos>(this.urlEndPoint + '/' + id)
  }

  create(pj: Proyectos): Observable<any>{
    return this.http.post(this.urlEndPoint, pj);
  }

  update(pj: Proyectos, id: number): Observable<any>{
    return this.http.put(this.urlEndPoint + '/' + id, pj);
  }

  delete(id:number): Observable<any>{
    return this.http.delete(this.urlEndPoint + '/' + id);
  }
}

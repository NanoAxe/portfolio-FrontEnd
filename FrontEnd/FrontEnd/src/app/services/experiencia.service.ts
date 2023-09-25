import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_BACKEND } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Experiencias } from '../models/Experiencias';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private urlEndPoint: string = URL_BACKEND+'/exp';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Experiencias[]>{
    return this.http.get<Experiencias[]>(this.urlEndPoint);
  }

  getBy(id: number): Observable<Experiencias[]>{
    return this.http.get<Experiencias[]>(this.urlEndPoint + 'By/' + id)
  }

  get(id: number): Observable<Experiencias>{
    return this.http.get<Experiencias>(this.urlEndPoint + '/' + id)
  }

  create(user: Experiencias): Observable<any>{
    return this.http.post(this.urlEndPoint, user);
  }

  update(user: Experiencias, id: number): Observable<any>{
    return this.http.put(this.urlEndPoint + '/' + id, user);
  }

  delete(id:number): Observable<any>{
    return this.http.delete(this.urlEndPoint + '/' + id);
  }
}

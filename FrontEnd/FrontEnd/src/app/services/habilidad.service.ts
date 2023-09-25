import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_BACKEND } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Habilidades } from '../models/Habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  private urlEndPoint: string = URL_BACKEND+'/habilidad';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Habilidades[]>{
    return this.http.get<Habilidades[]>(this.urlEndPoint);
  }

  getBy(id: number): Observable<Habilidades[]>{
    return this.http.get<Habilidades[]>(this.urlEndPoint + 'By/' + id)
  }

  get(id: number): Observable<Habilidades>{
    return this.http.get<Habilidades>(this.urlEndPoint + '/' + id)
  }

  create(user: Habilidades): Observable<any>{
    return this.http.post(this.urlEndPoint, user);
  }

  update(user: Habilidades, id: number): Observable<any>{
    return this.http.put(this.urlEndPoint + '/' + id, user);
  }

  delete(id:number): Observable<any>{
    return this.http.delete(this.urlEndPoint + '/' + id);
  }
}

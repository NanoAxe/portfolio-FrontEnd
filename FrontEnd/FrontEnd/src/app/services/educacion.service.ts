import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_BACKEND } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../models/Educacion';
@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private urlEndPoint: string = URL_BACKEND+'/educacion';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.urlEndPoint);
  }

  getBy(id: number): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.urlEndPoint + 'By/' + id)
  }

  get(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.urlEndPoint + '/' + id)
  }

  create(ed: Educacion): Observable<any>{
    return this.http.post(this.urlEndPoint, ed);
  }

  update(ed: Educacion, id: number): Observable<any>{
    return this.http.put(this.urlEndPoint + '/' + id, ed);
  }

  delete(id:number): Observable<any>{
    return this.http.delete(this.urlEndPoint + '/' + id);
  }
}

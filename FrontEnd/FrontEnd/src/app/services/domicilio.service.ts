import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_BACKEND } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Domicilios } from '../models/Domicilios';

@Injectable({
  providedIn: 'root'
})
export class DomicilioService {
  private urlEndPoint: string = URL_BACKEND+'/domicilio';

  constructor(private http: HttpClient) {}

  getDomicilios(): Observable<Domicilios[]>{
    return this.http.get<Domicilios[]>(this.urlEndPoint);
  }

  getDomicilio(id: number): Observable<Domicilios>{
    return this.http.get<Domicilios>(this.urlEndPoint + '/' + id)
  }

  crearDomicilio(user: Domicilios): Observable<any>{
    return this.http.post(this.urlEndPoint, user);
  }

  updateDomicilio(user: Domicilios, id: number): Observable<any>{
    return this.http.put(this.urlEndPoint + '/' + id, user);
  }

  deleteDomicilio(id:number): Observable<any>{
    return this.http.delete(this.urlEndPoint + '/' + id);
  }
}

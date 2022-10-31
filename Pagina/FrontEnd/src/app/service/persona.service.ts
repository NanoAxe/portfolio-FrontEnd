import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../Models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private URLEndPoint: string = URL_BACKEND;
  
  constructor(private http: HttpClient) {}

  getPersonaAll(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.URLEndPoint+'/persona');
  }

}
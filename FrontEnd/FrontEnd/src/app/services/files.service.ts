import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { Observable } from 'rxjs';
import { FileModel } from '../models/FilesModel';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  private urlEndPoint: string = URL_BACKEND+'/files';
  constructor(private http: HttpClient) {}
  getAll(): Observable<FileModel[]>{
    return this.http.get<FileModel[]>(this.urlEndPoint+"/allfiles");
  }

  create(file: File): Observable<HttpEvent<any>>{
    const formData : FormData = new FormData;
    formData.append('files', file);
    const req = new HttpRequest('POST', this.urlEndPoint+'/upload', formData, {
      responseType: 'json'
    });
    return this.http.request(req);
  }

  subir(file: File): Observable<HttpEvent<any>>{
    const formData : FormData = new FormData;
    formData.append('files', file);
    const req = new HttpRequest('POST', this.urlEndPoint+'/subir', formData, {
      responseType: 'json'
    });
    return this.http.request(req);
  }

}

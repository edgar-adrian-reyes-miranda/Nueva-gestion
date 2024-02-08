import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './UrlApiB';
import { Observable, retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }


  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('files', file, file.name);
    const req = new HttpRequest('POST', `${baseUrl}files/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  getFiles(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}files/file`);
  }

  deletefile(filename: string): Observable<any> {
    return this.http.delete(`${baseUrl}files/filename/${filename}`);
  }

  downloadFile(filename: string): Observable<Blob> {
    return this.http.get(`${baseUrl}files/file/${filename}`, {
      responseType: 'blob'
    });
  }
}

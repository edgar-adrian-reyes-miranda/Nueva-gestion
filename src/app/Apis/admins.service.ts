import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Admins } from '../Interfaces/admins';
import baseUrl from './UrlApiB';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private http: HttpClient) { }
  private HttpHeaders = new HttpHeaders({ 'Content-Type': `applications/json` });

  getAll(): Observable<Admins[]> {
    return this.http.get(`${baseUrl}admins/lista`).pipe(
      map(Admins => Admins as Admins[]));
  }

  getAdminId(id: number) {
    return this.http.get<Admins>(`baseUrladmins/${id}`);
  }
  registroAdmin(admin: Admins) {
    return this.http.post<Admins>(`${baseUrl}admins/registro`, admin, { headers: this.HttpHeaders });
  }

  eliminarAdmin(id: number) {
    return this.http.delete<void>(`${baseUrl}admins/${id}`);
  }

  login(admin: Admins): Observable<Admins> {
    return this.http.post<Admins>(`${baseUrl}admins/login`, admin, { headers: this.HttpHeaders })
      .pipe(catchError((error) => {
        console.error('Error en el inicio de sesion', error);
        return throwError('Error en el servidor');
      }));
  }
  editarAdmin(id: number, admin: Admins): Observable<Admins> {
    return this.http.put<Admins>(`${baseUrl}admins/edit/${id}`, admin, { headers: this.HttpHeaders });
  }
}

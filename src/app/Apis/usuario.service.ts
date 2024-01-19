import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../Interfaces/usuarios';
import baseUrl from './UrlApiB';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  getAllUsuario(): Observable<Usuarios[]> {
    return this.http.get(`${baseUrl}usuarios/lista`).pipe(
      map(usuarios => usuarios as Usuarios[]));
  }

  gerUsuarioById(id: number) {
    return this.http.get<Usuarios>(`${baseUrl}usuarios/${id}`);
  }

  registroUsuario(usuario: Usuarios) {
    return this.http.post<Usuarios>(`${baseUrl}usuarios/registro`, usuario, { headers: this.httpHeaders });
  }

  EliminarUsuario(id: number) {
    return this.http.delete<void>(`${baseUrl}usuarios/${id}`);
  }

  editarUsuario(id: number, usuario: Usuarios): Observable<Usuarios> {
    return this.http.put<Usuarios>(`${baseUrl}usuarios/editar/${id}`, usuario, { headers: this.httpHeaders });
  }

  login(usuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(`${baseUrl}usuarios/login`, usuario, { headers: this.httpHeaders })
      .pipe(catchError((error) => {
        console.error('ERROR AL INICIAR SESIÓN', error);
        return throwError('Error en el inicio de sesión');
      }));
  }

}

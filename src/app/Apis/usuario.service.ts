import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../Interfaces/usuarios';
import baseUrl from './UrlApiB';
import { Observable, catchError, map, throwError, tap } from 'rxjs';
import { Admins } from '../Interfaces/admins';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }


  getAllUsuario(): Observable<Usuarios[]> {
    return this.http.get(`${baseUrl}usuarios/lista`).pipe(
      map(usuarios => usuarios as Usuarios[]));
  }

  gerUsuarioById(id: number) {
    return this.http.get<Usuarios>(`${baseUrl}usuarios/${id}`);
  }

  registroUsuario(usuario: Usuarios) {
    return this.http.post<Usuarios>(`${baseUrl}usuarios/registro`, usuario);
  }

  EliminarUsuario(id: number) {
    return this.http.delete<void>(`${baseUrl}usuarios/${id}`);
  }

  editarUsuario(usuario: Usuarios): Observable<Usuarios> {
    return this.http.put<Usuarios>(`${baseUrl}usuarios/editar/${usuario.id}`, usuario);
  }

  login(usuario: any): Observable<any> {
    // @ts-ignore
    return this.http.post<any>(`${baseUrl}usuarios/login`, usuario, { responseType: 'text' })
      .pipe(
        tap(response => console.log('Respuesta del servidor:', response)),
        catchError((error) => {
          console.error('ERROR AL INICIAR SESIÓN', error);
          return throwError('Error en el inicio de sesión');
        })
      );
  }

}


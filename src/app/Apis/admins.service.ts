import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Admins } from '../Interfaces/admins';
import baseUrl from './UrlApiB';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private http: HttpClient) { }
  //private HttpHeaders = new HttpHeaders({ 'Content-Type': `applications/json` });

  getAll(): Observable<Admins[]> {
    return this.http.get(`${baseUrl}adminis/lista`).pipe(
      map(Admins => Admins as Admins[]));
  }

  getAdminId(id: number) {
    return this.http.get<Admins>(`${baseUrl}adminis/${id}`);
  }
  registroAdmin(admin: Admins) {
    return this.http.post<Admins>(`${baseUrl}adminis/registro`, admin);
  }

  eliminarAdmin(id: number) {
    return this.http.delete<void>(`${baseUrl}adminis/${id}`);
  }

  login(usuario: any): Observable<Admins> {
    return this.http.post<Admins>(`${baseUrl}adminis/login`, usuario)
      .pipe(
        catchError((error) => {
          console.error('Error en el inicio de sesion', error);
          return throwError('Error en el servidor');
        }));
  }
  editarAdm(admin:Admins){
    return this.http.put<Admins>(`${baseUrl}adminis/editar/${admin.id_admin}`, admin);
  }

  imprimir(encabezado:string[], cuerpo:Array<any>, titulo:string, guardar?:boolean){
    const doc = new jsPDF({
      orientation:"portrait",
      unit:"px",
      format:'letter'
    });
    doc.text(titulo, doc.internal.pageSize.width /2, 25,{align:'center'});
    autoTable(doc,{
      head:[encabezado],
      body:cuerpo
    });
    if (guardar){
      doc.save("Lista"+'.pdf');
    }else{

    }
  }
}

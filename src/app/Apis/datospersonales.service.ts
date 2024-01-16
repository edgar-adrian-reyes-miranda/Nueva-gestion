import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Datospersonales} from "../Interfaces/datospersonales";
import baseUrl from "./UrlApiB";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DatospersonalesService {

  constructor(private http:HttpClient,) { }
  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'});
  getListPersonales():Observable<Datospersonales[]>{
    return this.http.get(`${baseUrl}personales/lista`).pipe(
        map(personales=> personales as Datospersonales[])
      );
  }
  getporIdpersonal(id_person:number){
    return this.http.get<Datospersonales>(`${baseUrl}personales/${id_person}`);
  }

  guardarPersonales(personales: Datospersonales){
  return this.http.post<Datospersonales>(`${baseUrl}personales/guardar`, personales, {headers:this.httpHeaders});
  }

  editarPersonal(personales:Datospersonales){
    return this.http.put<Datospersonales>(`${baseUrl}personales/editar/${personales.id_person}`, personales, {headers:this.httpHeaders});
  }
  eliminarPersonales(id_person:number){
    return this.http.delete<void>(`${baseUrl}personales/${id_person}`, {headers:this.httpHeaders});
  }
  //elimonado suave
  softDelete(personales:Datospersonales){
    return this.http.put<Datospersonales>(`${baseUrl}personales/softDelete/${personales.id_person}`, personales);
  }

  //restore
  restore(personales:Datospersonales){
    return this.http.put<Datospersonales>(`${baseUrl}personales/restore/${personales.id_person}`, personales);
  }

}

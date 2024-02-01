import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Perfilamiento} from "../Interfaces/perfilamiento";
import baseUrl from "./UrlApiB";

@Injectable({
  providedIn: 'root'
})
export class PerfilamientoService {

  constructor(private http:HttpClient) { }

  getListPerfil():Observable<Perfilamiento[]>{
    return this.http.get(`${baseUrl}perfilamiento/lista`).pipe(
      map(perfil => perfil as Perfilamiento[])
    );
  }

  getporIdPerfil(id_perfilamiento:number){
    return this.http.get<Perfilamiento>(`${baseUrl}perfilamiento/${id_perfilamiento}`);
  }

  guardarPerfil(perfil:Perfilamiento){
    return this.http.post<Perfilamiento>(`${baseUrl}perfilamiento/guardar`, perfil);
  }
  editarPerfil(perfil:Perfilamiento){
    return this.http.put<Perfilamiento>(`${baseUrl}perfilamiento/editar/${perfil.id_perfilamiento}`, perfil);
  }

  eliminarPerfil(id_perfilamiento:number){
    return this.http.delete<void>(`${baseUrl}perfilamiento/${id_perfilamiento}`);
  }




}

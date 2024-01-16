import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Universidades} from "../Interfaces/universidades";
import baseUrl from "./UrlApiB";

@Injectable({
  providedIn: 'root'
})
export class UniversidadesService {

  constructor(private http:HttpClient) { }
  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'});

  getListUniversidad():Observable<Universidades[]>{
    return  this.http.get(`${baseUrl}universidades/lista` ).pipe(
      map(universidad => universidad as Universidades[])
    );
  }
  getporIdUniversodad(id_uni:number){
    return this.http.get<Universidades>(`${baseUrl}universidades/${id_uni}`);
  }

  guardarUniversodad(universidad:Universidades){
    return this.http.post<Universidades>(`${baseUrl}universidades/guardar`, universidad, {headers:this.httpHeaders});
  }

  editarUniversidad(universidad:Universidades){
    return this.http.put<Universidades>(`${baseUrl}universidades/editar/${universidad.id_uni}`, universidad, {headers:this.httpHeaders});
  }

  eliminarUniversidad(id_uni:number){
    return this.http.delete<void>(`${baseUrl}universidades/${id_uni}`);
  }

}

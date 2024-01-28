import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import baseUrl from "./UrlApiB";
import {map, Observable} from "rxjs";
import {Enlace} from "../Interfaces/enlace";

@Injectable({
  providedIn: 'root'
})
export class EnlaceService {

  constructor(private http:HttpClient) { }


  getListEnlace():Observable<Enlace[]>{
    return this.http.get(`${baseUrl}enlace/lista`).pipe(
      map(enlace=> enlace as Enlace[])
    );
  }
  getporId(id_enlace:number){
    return this.http.get<Enlace>(`${baseUrl}enlace/${id_enlace}`);
  }

  guardarEnlace(enlace:Enlace){
    return this.http.post<Enlace>(`${baseUrl}enlace/guardar`, enlace);
  }

  editarEnlace(enlace:Enlace){
    return this.http.put<Enlace>(`${baseUrl}enlace/editar/${enlace.id_enlace}`, enlace);
  }

  eliminarEnlace(id_enlace:number){
    return this.http.delete<void>(`${baseUrl}enlace/${id_enlace}`);
  }

  //elimonado suave
  softDelete(enlace:Enlace){
    return this.http.put<Enlace>(`${baseUrl}ftd/softDelete/${enlace.id_enlace}`, enlace);
  }

  //restore
  restore(enlace:Enlace){
    return this.http.put<Enlace>(`${baseUrl}ftd/restore/${enlace.id_enlace}`, enlace);
  }


}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Grupos} from "../Interfaces/grupos";
import baseUrl from "./UrlApiB";

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  constructor(private http:HttpClient) { }
  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'});

  getListGrupo():Observable<Grupos[]>{
    return this.http.get(`${baseUrl}grupos/lista`).pipe(
      map(grupo=> grupo as Grupos[])
    );
  }

  getporIdGrupo(id_grupo:number){
    return this.http.get<Grupos>(`${baseUrl}grupos/${id_grupo}`);
  }

  guardarGrupo(grupo:Grupos){
    return this.http.post<Grupos>(`${baseUrl}grupos/guardar`, grupo, {headers:this.httpHeaders});
  }


  editarGrupo(grupo:Grupos){
    return this.http.put<Grupos>(`${baseUrl}grupos/editar/${grupo.id_grupo}`, grupo, {headers:this.httpHeaders});
  }

  eliminarGrupo(id_grupo:number){
    return this.http.delete(`${baseUrl}grupos/${id_grupo}`);
  }

  //elimonado suave
  softDelete(grupo:Grupos){
    return this.http.put<Grupos>(`${baseUrl}ftd/softDelete/${grupo.id_grupo}`, grupo);
  }

  //restore
  restore(grupo:Grupos){
    return this.http.put<Grupos>(`${baseUrl}ftd/restore/${grupo.id_grupo}`, grupo);
  }

}

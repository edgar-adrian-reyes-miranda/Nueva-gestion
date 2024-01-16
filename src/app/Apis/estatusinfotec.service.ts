import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import baseUrl from "./UrlApiB";
import {map, Observable} from "rxjs";
import {Estatusinfotec} from "../Interfaces/estatusinfotec";

@Injectable({
  providedIn: 'root'
})
export class EstatusinfotecService {

  constructor(private http:HttpClient) { }
  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'});

  getList():Observable<Estatusinfotec[]>{
    return this.http.get(`${baseUrl}estatus/lista`).pipe(
        map(infotec => infotec as Estatusinfotec[])
      );
  }

  getporIdEstatus(id_estatus:number){
    return this.http.get<Estatusinfotec>(`${baseUrl}estatus/${id_estatus}`);
  }
  guardarEstatus(estatus:Estatusinfotec){
    return this.http.post<Estatusinfotec>(`${baseUrl}estatus/guardar`, estatus, {headers:this.httpHeaders});
  }
  editarEstatus(estatus:Estatusinfotec){
    return this.http.put<Estatusinfotec>(`${baseUrl}estatus/editar/${estatus.id_estatus}`, estatus, {headers:this.httpHeaders});
  }

  eliminarEstatus(id_estatus:number){
    return this.http.delete<void>(`${baseUrl}estatus/${id_estatus}`);
  }
}

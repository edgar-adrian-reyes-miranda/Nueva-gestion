import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import baseUrl from "./UrlApiB";
import {map, Observable} from "rxjs";
import {Datosftd} from "../Interfaces/datosftd";

@Injectable({
  providedIn: 'root'
})
export class DatosftdService {

  constructor(private http:HttpClient) { }

  getListFtd():Observable<Datosftd[]>{
    return this.http.get(`${baseUrl}ftd/lista`).pipe(
        map(ftds=> ftds as Datosftd[]));
  }

  getporIdFtd(id_ftd:number){
    return this.http.get<Datosftd>(`${baseUrl}ftd/${id_ftd}`);
  }

  guardarFtd(ftd:Datosftd){
    return this.http.post<Datosftd>(`${baseUrl}ftd/guardar`, ftd);
  }

  editarFtd(ftd:Datosftd){
    return this.http.put<Datosftd>(`${baseUrl}ftd/editar/${ftd.id_ftd}`, ftd);
  }
  eliminarftd(id_ftd:number){
    return this.http.delete<void>(`${baseUrl}ftd/${id_ftd}`);
  }

  //eliminacion suave

  softDelete(ftd:Datosftd){
    return this.http.put<Datosftd>(`${baseUrl}ftd/softDelete/${ftd.id_ftd}`, ftd);
  }

  //restore
  restore(ftd:Datosftd){
    return this.http.put<Datosftd>(`${baseUrl}ftd/restore/${ftd.id_ftd}`, ftd);
  }

}

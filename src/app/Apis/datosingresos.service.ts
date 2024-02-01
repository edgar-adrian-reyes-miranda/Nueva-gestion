import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import baseUrl from "./UrlApiB";
import {map, Observable} from "rxjs";
import {Datosingresos} from "../Interfaces/datosingresos";

@Injectable({
  providedIn: 'root'
})
export class DatosingresosService {

  constructor(private http:HttpClient) { }

  getListIngreso():Observable<Datosingresos[]>{
    return this.http.get(`${baseUrl}ingresos/lista`).pipe(
      map(ingreso=> ingreso as Datosingresos[] )
    );
  }
  getporIdIngreso(id_ingreso:number){
    return this.http.get<Datosingresos>(`${baseUrl}ingresos/${id_ingreso}`);
  }
  guardarIngreso(ingreso:Datosingresos){
    return this.http.post<Datosingresos>(`${baseUrl}ingresos/guardar`, ingreso);
  }

  editarIngreso(ingreso:Datosingresos){
    return this.http.put<Datosingresos>(`${baseUrl}ingresos/editar/${ingreso.id_ingreso}`, ingreso);
  }

  eliminarIngreso(id_ingreso:number){
    return this.http.delete<void>(`${baseUrl}ingresos/${id_ingreso}`);
  }


  //elimanado sueva
  softDelete(ingreso:Datosingresos){
    return this.http.put<Datosingresos>(`${baseUrl}ingresos/softDelete/${ingreso.id_ingreso}`, ingreso);
  }

  //restore
  restore(ingreso:Datosingresos){
    return this.http.put<Datosingresos>(`${baseUrl}ingresos/restore/${ingreso.id_ingreso}`, ingreso);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Periodo} from "../Interfaces/periodo";
import baseUrl from "./UrlApiB";

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {

  constructor(private http:HttpClient) { }

  getListPeriodo():Observable<Periodo[]>{
    return this.http.get(`${baseUrl}periodo/lista`).pipe(
      map(periodo => periodo as Periodo[])
    );
  }

  getporIdperiodo(id_periodo:number){
    return this.http.get<Periodo>(`${baseUrl}periodo/${id_periodo}`);
  }


}

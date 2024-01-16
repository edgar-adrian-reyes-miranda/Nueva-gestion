import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Turno} from "../Interfaces/turno";
import baseUrl from "./UrlApiB";

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(private http:HttpClient) { }

  getListtunro():Observable<Turno[]>{
    return this.http.get(`${baseUrl}turno/lista`).pipe(
      map(turno => turno as Turno[])
    );
  }

  getporIdturno(id_turno:number){
    return this.http.get<Turno>(`${baseUrl}turno/${id_turno}`);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Horarios} from "../Interfaces/horarios";
import baseUrl from "./UrlApiB";

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(private http: HttpClient) {
  }

  getListHorario():Observable<Horarios[]> {
    return this.http.get(`${baseUrl}horario/lista`).pipe(
        map(horario => horario as Horarios[])
      );
  }

  getporIHorario(id_horario:number){
    return this.http.get<Horarios>(`${baseUrl}horario/${id_horario}`);
  }
}

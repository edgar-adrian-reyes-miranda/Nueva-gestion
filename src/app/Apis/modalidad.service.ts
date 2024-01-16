import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Modalidad} from "../Interfaces/modalidad";
import baseUrl from "./UrlApiB";

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {

  constructor(private http:HttpClient) { }

  getListModalidad():Observable<Modalidad[]>{
    return this.http.get(`${baseUrl}modalidad/lista`).pipe(
      map(modalidad=> modalidad as Modalidad[])
    );
  }

  getporIdModalidad(id_modalida:number){
    return this.http.get<Modalidad>(`${baseUrl}modadlidad/${id_modalida}`);
  }
}

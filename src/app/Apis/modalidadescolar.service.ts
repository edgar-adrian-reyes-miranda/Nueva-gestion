import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Modalidadescolares} from "../Interfaces/modalidadescolares";
import baseUrl from "./UrlApiB";

@Injectable({
  providedIn: 'root'
})
export class ModalidadescolarService {

  constructor(private http:HttpClient) { }

  getListEscolar():Observable<Modalidadescolares[]>{
    return this.http.get(`${baseUrl}modEscolar/lista`).pipe(
      map(modescoalr=> modescoalr as Modalidadescolares[])
    );
  }

  getporIdEscolar(id_modalidad:number){
    return this.http.get(`${baseUrl}modEscolar/${id_modalidad}`);
  }
}

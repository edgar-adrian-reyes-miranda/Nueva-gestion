import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Tramite} from "../Interfaces/tramite";
import baseUrl from "./UrlApiB";

@Injectable({
  providedIn: 'root'
})
export class TramiteService {

  constructor(private http:HttpClient) { }

  getListTramite():Observable<Tramite[]>{
    return this.http.get(`${baseUrl}tramite/lista`).pipe(
      map(tramite => tramite as Tramite[])
    );
  }

  getporIdtramite(id_tramite:number){
    return this.http.get<Tramite>(`${baseUrl}tramite/${id_tramite}`);
  }
}

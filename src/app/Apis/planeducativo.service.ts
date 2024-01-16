import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Planeducativo} from "../Interfaces/planeducativo";
import baseUrl from "./UrlApiB";

@Injectable({
  providedIn: 'root'
})
export class PlaneducativoService {

  constructor(private http:HttpClient) { }

  getListPlan():Observable<Planeducativo[]>{
    return this.http.get(`${baseUrl}planes/lista`).pipe(
      map(planes=> planes as Planeducativo[])
    );
  }

  getporIdplan(id_plan:number){
    return this.http.get<Planeducativo>(`${baseUrl}planes/${id_plan}`);
  }


}

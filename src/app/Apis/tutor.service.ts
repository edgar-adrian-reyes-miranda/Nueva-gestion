import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Tutor} from "../Interfaces/tutor";
import baseUrl from "./UrlApiB";

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  constructor(private http:HttpClient) { }

  getListTutor():Observable<Tutor[]>{
    return this.http.get(`${baseUrl}tutor/lista`).pipe(
      map(tutores => tutores as Tutor[])
    );
  }

  getporIdtutor(id_tutor:number){
    return this.http.get<Tutor>(`${baseUrl}tutor/${id_tutor}`);
  }
}

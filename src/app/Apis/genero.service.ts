import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Genero} from "../Interfaces/genero";
import baseUrl from "./UrlApiB";

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private http:HttpClient) { }

  getListGenero():Observable<Genero[]>{
    return this.http.get(`${baseUrl}genero/lista`).pipe(
      map(genero => genero as Genero[])
    );
  }

  getporId(id_genero:number){
    return this.http.get<Genero>(`${baseUrl}genero/${id_genero}`);
  }

}

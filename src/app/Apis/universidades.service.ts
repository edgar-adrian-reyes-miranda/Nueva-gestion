import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Universidades } from "../Interfaces/universidades";
import baseUrl from "./UrlApiB";

@Injectable({
  providedIn: 'root'
})
export class UniversidadesService {

  constructor(private http: HttpClient) { }

  getListUniversidad(): Observable<Universidades[]> {
    return this.http.get(`${baseUrl}universidades/lista`).pipe(
      map(universidad => universidad as Universidades[])
    );
  }
  getListUniversidadBaja(): Observable<Universidades[]> {
    return this.http.get(`${baseUrl}universidades/lista/false`).pipe(
      map(universidad => universidad as Universidades[])
    );
  }
  getporIdUniversodad(id_uni: number) {
    return this.http.get<Universidades>(`${baseUrl}universidades/${id_uni}`);
  }

  guardarUniversodad(universidad: Universidades) {
    return this.http.post<Universidades>(`${baseUrl}universidades/guardar`, universidad);
  }

  editarUniversidad(universidad: Universidades) {
    return this.http.put<Universidades>(`${baseUrl}universidades/editar/${universidad.id_uni}`, universidad);
  }

  eliminarUniversidad(id_uni: number) {
    return this.http.delete<void>(`${baseUrl}universidades/${id_uni}`);
  }

  softdeDelete(id_uni : number) {
    return this.http.delete<void>(`${baseUrl}universidades/logica/${id_uni}`);
  }
  restaurar(id_uni: number):Observable<Universidades>{
    return this.http.put<Universidades>(`${baseUrl}universidades/logica/${id_uni}`, null);
  }

}

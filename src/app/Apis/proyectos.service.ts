import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Proyectos } from "../Interfaces/proyectos";
import baseUrl from "./UrlApiB";

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http: HttpClient) { }

  getListProyecto(): Observable<Proyectos[]> {
    return this.http.get(`${baseUrl}proyectos/lista`).pipe(
      map(proyecto => proyecto as Proyectos[])
    );
  }

  getporIdproyecto(id_proyecto: number) {
    return this.http.get<Proyectos>(`${baseUrl}proyectos/${id_proyecto}`);
  }

  guardarProyecto(proyecto: Proyectos) {
    return this.http.post<Proyectos>(`${baseUrl}proyectos/guardar`, proyecto);
  }
  editarProyecto(proyecto: Proyectos) {
    return this.http.put<Proyectos>(`${baseUrl}proyectos/editar/${proyecto.id_proyecto}`, proyecto);
  }

  eliminarProyecto(id_proyecto: number) {
    return this.http.delete<void>(`${baseUrl}proyectos/${id_proyecto}`);
  }

  //elimonado suave
  softDelete(id_proyecto: number) {
    return this.http.delete<void>(`${baseUrl}proyectos/soft/${id_proyecto}`);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import baseUrl from "./UrlApiB";
import {map, Observable} from "rxjs";
import {Cursos} from "../Interfaces/cursos";

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private htpp:HttpClient) { }

  gerListCursos():Observable<Cursos[]>{
    return this.htpp.get(`${baseUrl}cursos/lista`).pipe(
        map(curso=> curso as Cursos[])
      );
  }
  getporIdCursos(id_curso:number){
    return this.htpp.get<Cursos>(`${baseUrl}cursos/${id_curso}`);
  }
  guardarCursos(curso: Cursos){
    return this.htpp.post<Cursos>(`${baseUrl}cursos/guardar`, curso);
  }
  editarCurso(curso: Cursos){
    return this.htpp.put<Cursos>(`${baseUrl}cursos/editar/${curso.id_curso}`, curso);
  }
  //Hard delete
  eliminar(id_curso: number){
    return this.htpp.delete<void>(`${baseUrl}cursos/${id_curso}`);
  }


}

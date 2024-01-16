import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import baseUrl from "./UrlApiB";
import {Datosescolares} from "../Interfaces/datosescolares";
import {map, Observable} from "rxjs";
import {Cursos} from "../Interfaces/cursos";

@Injectable({
  providedIn: 'root'
})
export class DatosescolaresService {

  constructor(private http:HttpClient) { }
  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'});

  getListEscolares():Observable<Datosescolares[]>{
    return this.http.get(`${baseUrl}escolares/lista`)
      .pipe(
        map(escolar=> escolar as Datosescolares[])
      );
  }
  getpotIdEscolar(id_escolar:number){
    return this.http.get<Datosescolares>(`${baseUrl}escolares/${id_escolar}`);
  }
  guardarEscolar(escolar:Datosescolares){
    return this.http.post<Datosescolares>(`${baseUrl}escolares/guardar`, escolar, {headers:this.httpHeaders});
  }
  editarEscolar(escolar:Datosescolares){
    return this.http.put<Datosescolares>(`${baseUrl}escolares/editar/${escolar.id_escolar}`, escolar, {headers:this.httpHeaders});
  }

  //Harda delete
  eliminarEscoalr(id_escolar:number){
    return this.http.delete<void>(`${baseUrl}escolares/${id_escolar}`);
  }

  //Soft delete valor a false
  softDelete(escolar:Datosescolares){
    return this.http.put<Datosescolares>(`${baseUrl}escolar/softdelete/${escolar.id_escolar}`, escolar);
  }
  //retore valor a true
  restore(escolar:Datosescolares){
    return this.http.put<Datosescolares>(`${baseUrl}escolar/restore/${escolar.id_escolar}`, escolar);
  }

}

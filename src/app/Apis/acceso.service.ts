import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "./UrlApiB";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  constructor(private http:HttpClient, private router:Router) { }

  logueo(usuarioData:any){
    return this.http.post(`${baseUrl}usuarios/login`, usuarioData);

  }
  registro(username:string, password:string, correo:string){
    const regisData={username, password, correo};
    return this.http.post(`${baseUrl}usuarios/registro`, regisData);
  }

}

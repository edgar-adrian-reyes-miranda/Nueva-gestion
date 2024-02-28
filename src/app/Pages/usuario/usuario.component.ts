import {Component, OnInit} from '@angular/core';
import {Usuarios} from "../../Interfaces/usuarios";
import {UsuarioService} from "../../Apis/usuario.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements  OnInit{

  registro: Usuarios = new Usuarios();
    currentUser:any;

  constructor(private api:UsuarioService, private acitve:ActivatedRoute) {
  }
  ngOnInit(): void {
  this.cargarusuario();
  }

  private cargarusuario(){
    this.acitve.params.subscribe(
      params=>{
        let id = params['id'];
        if(id){
          this.api.gerUsuarioById(id).subscribe(
            (usuarios)=>{
              this.currentUser = usuarios;

            },
            error => {
              console.error('Error en cargar', error);
            }
          )
        }
      }
    )
  }




}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Usuarios} from "../../Interfaces/usuarios";
import {UsuarioService} from "../../Apis/usuario.service";

@Component({
  selector: 'app-tabla-vista',
  templateUrl: './tabla-vista.component.html',
  styleUrls: ['./tabla-vista.component.css']
})
export class TablaVistaComponent implements OnInit {
  registro: Usuarios= new Usuarios();
  mostrarDato:any;

  constructor(
    private route: Router,
    private apisu:UsuarioService,
    private actived: ActivatedRoute) {

  }

  ngOnInit(): void {
   this.cargausuario();

  }

  private cargausuario(){
    this.actived.params.subscribe(
      params=>{
        let id = params['id'];
        if(id){
          this.apisu.gerUsuarioById(id).subscribe(
            (usuario: Usuarios)=>{
              this.mostrarDato = usuario;
            },
            error => {
              console.error('Error en la carga de usuario', error);
            }
          );
        }
      }
    );
  }


}

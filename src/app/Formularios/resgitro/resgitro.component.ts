import {Component, OnInit} from '@angular/core';
import {Usuarios} from "../../Interfaces/usuarios";
import {ActivatedRoute, Router} from "@angular/router";
import {AccesoService} from "../../Apis/acceso.service";

@Component({
  selector: 'app-resgitro',
  templateUrl: './resgitro.component.html',
  styleUrls: ['./resgitro.component.css']
})
export class ResgitroComponent implements  OnInit{
  usuario:Usuarios= new Usuarios();

  constructor(private api:AccesoService,
              private route:Router,
              private actived:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.actived.params.subscribe(params=>{
      let id= params['id'];
      if (id){
        this
      }
    })
  }
  /*
  guardar(){
    this.api.registro(this.usuario).subscribe(
      usuarios=>{
        this.route.navigate(['/registro-personales']);
        console.log('Nuevo usuario', `Nuevo ${this.usuario.id}con exito`);
      }
    )
  }
  editar(){

  }*/
}

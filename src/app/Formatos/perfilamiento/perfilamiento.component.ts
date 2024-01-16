import {Component, OnInit} from '@angular/core';
import {Perfilamiento} from "../../Interfaces/perfilamiento";
import {PerfilamientoService} from "../../Apis/perfilamiento.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-perfilamiento',
  templateUrl: './perfilamiento.component.html',
  styleUrls: ['./perfilamiento.component.css']
})
export class PerfilamientoComponent implements  OnInit{
  perfil:Perfilamiento[]=[];
  perfila:Perfilamiento= new Perfilamiento();
  constructor(private api:PerfilamientoService,
              private route:Router,
              private actived:ActivatedRoute) {
  }
  ngOnInit(): void {
   this.api.getListPerfil().subscribe(
     (data:Perfilamiento[])=>{
       console.log('lista de perfilamiento', data);
       this.perfil= data;
     }
   )
  this.cargarpefil();
  }
  private cargarpefil():void{
    this.actived.params.subscribe(params=> {
        let id = params['id_perfilamiento']
        if (id) {
          this.api.getporIdPerfil(id).subscribe(
            (perfilas) => this.perfila = perfilas);
        }
      }
    );
  }
  guardar(){
    this.api.guardarPerfil(this.perfila).subscribe(
      perfilamienot=>{
        this.route.navigate(['/perfilamiento']);
        window.location.reload();
        console.log('Nuevo perfil',`Nuevo ${this.perfila.nombre}con exito`)
      }
    );
  }
  editar(){
  this.api.editarPerfil(this.perfila).subscribe(
    perfilamienot=>{
      this.route.navigate(['/perfilamiento']);
      window.location.reload();
      console.log('Perfil actualizado',`Perfil${this.perfila.nombre}con exito`)
    },
    error=>'Error en la actualizacion');
  }

  //tabla
  private actualizarlista(){
    this.api.getListPerfil().subscribe(
      (data:Perfilamiento[])=>{
        console.log('Datos de perfil actualizados', data)
        this.perfil= data;
      },
      error=> console.error('Error en la obtencion de la lista', error),
      ()=> console.log('Actualizado la lista de perfilamiento')
    )
  }
  eliminar(id: number | undefined){
    if (typeof id === 'number') {
      this.api.eliminarPerfil(id).subscribe(
        res => {
          console.log('Eliminado perfil');
          window.location.reload();
          this.actualizarlista();
        },
        error => console.error('Error al elininar el perfil', error.error));
    }else{
        console.error('ID de perfilamiento no valido',id);
      }
    }
  editarPerfil(id_perfilamiento:number | undefined){
    if (id_perfilamiento !== undefined){
      this.route.navigate(['/perfilamiento/forms/', id_perfilamiento])
    }else{
      console.error('ID de perfilamienot no valido', id_perfilamiento)
    }
  }


}

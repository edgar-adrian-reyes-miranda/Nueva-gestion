import {Component, OnInit} from '@angular/core';
import {Grupos} from "../../Interfaces/grupos";
import {GruposService} from "../../Apis/grupos.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements  OnInit{
  grupo:Grupos[]=[];
  gruo:Grupos= new Grupos();
  page!: number;
  constructor(private api:GruposService,
              private roue:Router,
              private activedRoute:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.api.getListGrupo().subscribe(
      (Data:Grupos[])=>{
        this.grupo=Data;
      }
    )
    this.cargargrupos();
  }
  private cargargrupos():void{
    this.activedRoute.params.subscribe(
      params=>{
        let id= params['id_grupo']
        if (id){
          this.api.getporIdGrupo(id).subscribe((grupos)=> this.gruo=grupos)
        }
      }
    );
  }

  guardar(){
    this.api.guardarGrupo(this.gruo).subscribe(
      gruposs=>{
        this.roue.navigate(['/grupo']);
        window.location.reload();
        console.log('Nuevo grupo',`Nuevo${this.gruo.nombre}con exito`)
      }
    );
  }
  editar(){
    this.api.editarGrupo(this.gruo).subscribe(
      grupos=>{
        this.roue.navigate(['/grupo']);
        window.location.reload();
      },
      error=> 'Error en actualizar');
  }
  ///tabla

  private ActualizarListaGrupo(){
    this.api.getListGrupo().subscribe(
      (data:Grupos[])=>{
        this.grupo= data;
      },
      error=> console.error('Error en la lista grupo', error.error),
      ()=> console.log('Lista completa')
    );
  }
  eliminar(id:number | undefined){
    if (typeof id === 'number'){
      this.api.eliminarGrupo(id).subscribe(
        res=>{
          this.ActualizarListaGrupo();
          window.location.reload();
        },
        error=> console.error('Error al eliminar el grupo', error)
      );
    }else{
      console.error('ID de grupo no valido', id);
    }
  }
  editarGrupo(id_grupo: number | undefined){
    if (id_grupo !== undefined){
      this.roue.navigate(['/grupo/forms/', id_grupo])
    }else{
      console.error('ID de grupo no valido', id_grupo)
    }
  }
}

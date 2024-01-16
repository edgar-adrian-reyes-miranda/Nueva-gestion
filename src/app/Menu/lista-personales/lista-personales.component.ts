import {Component, OnInit} from '@angular/core';
import {Datospersonales} from "../../Interfaces/datospersonales";
import {DatospersonalesService} from "../../Apis/datospersonales.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-lista-personales',
  templateUrl: './lista-personales.component.html',
  styleUrls: ['./lista-personales.component.css']
})
export class ListaPersonalesComponent implements  OnInit{
 lista: Datospersonales[]=[];
  constructor(private api:DatospersonalesService,
              private route:Router) {
  }
  ngOnInit(): void {
    this.api.getListPersonales().subscribe(
      (data: Datospersonales[])=>{
        console.log('Lista personales', data);
        this.lista= data;
      },
      (error)=> console.error('Error al obtener la lista', error),
      ()=> console.log('Obtencion de lista completa')
    );
  }
  private Actualizarlista(){
    this.api.getListPersonales().subscribe(
      (Data:Datospersonales[])=>{
        this.lista=Data;
      },
      error=> console.error('Error al eliminar el dato', error),
      ()=> console.log('Actualizacion completa')
    );
  }
  eliminar(id:number | undefined){
    if (typeof id === 'number'){
      this.api.eliminarPersonales(id).subscribe(
        res=>{
          this.Actualizarlista();
        },
        error=> console.error('Error al eliminar el dato', error.error)
      );
    }else{
      console.error('ID de datos personale no valido', id);
    }
  }
  editar(id_person : number | undefined){
    if(id_person !== undefined){
      this.route.navigate(['/actualizar/forms/', id_person]);
    }else{
      console.error('ID de dato personal no valido', id_person);
    }

  }
}

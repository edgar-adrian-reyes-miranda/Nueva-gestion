import {Component, OnInit} from '@angular/core';
import {Datospersonales} from "../../Interfaces/datospersonales";
import {ActivatedRoute} from "@angular/router";
import {DatospersonalesService} from "../../Apis/datospersonales.service";
import {Genero} from "../../Interfaces/genero";
import {GeneroService} from "../../Apis/genero.service";

@Component({
  selector: 'app-personales-vista',
  templateUrl: './personales-vista.component.html',
  styleUrls: ['./personales-vista.component.css']
})
export class PersonalesVistaComponent implements  OnInit{

  personales: Datospersonales = new Datospersonales();
  genero:Genero = new Genero();
  mostrarDato:any;
  constructor(private actived: ActivatedRoute,private apiG:GeneroService,
private api: DatospersonalesService) {
  }
  ngOnInit(): void {
    this.cargarpersonales();
    this.cargargenero();
  }

  private cargarpersonales(){
    this.actived.params.subscribe(
      params=>{
        let id = params['id_person'];
        if (id){
          this.api.getporIdpersonal(id).subscribe(
            (personales : Datospersonales)=>{
              this.mostrarDato = personales;
            },
            error =>{
              console.error('Error en la cargar personal', error);
            }
          );
        }
      }
    );
  }

  private cargargenero(){
    this.actived.params.subscribe(
      params=>{
        let id = params['id_genero'];
        if (id){
          this.apiG.getporId(id).subscribe(
            (generos :Genero)=>{
              this.genero.tipo_genero = this.mostrarDato.generos;
            },
            error => {
              console.error('Error en la cargar de genero', error)
            }
          )
        }
      }
    )
  }


}

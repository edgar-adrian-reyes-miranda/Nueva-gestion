import {Component, OnInit} from '@angular/core';
import {Datospersonales} from "../../Interfaces/datospersonales";
import {DatospersonalesService} from "../../Apis/datospersonales.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Genero} from "../../Interfaces/genero";
import {GeneroService} from "../../Apis/genero.service";


@Component({
  selector: 'app-personales',
  templateUrl: './personales.component.html',
  styleUrls: ['./personales.component.css']
})
export class PersonalesComponent implements  OnInit{
  dato:Datospersonales= new Datospersonales();
  genero:Genero[]=[];
    constructor(private api:DatospersonalesService,
              private rouete:Router,
              private active:ActivatedRoute,
              private sergenero:GeneroService,) {
  }
  ngOnInit(): void {
    this.cargardatos();
    this.cargargenero();

  }
  cargardatos(){
    this.active.params.subscribe(params=>{
      let id=  params['id_person'];
      if(id){
        this.api.getporIdpersonal(id).subscribe(
          (personales) => this.dato=personales,
          (error)=> console.error('Error al cargar personales', error)
        )
      }
    });
  }
  cargargenero(){
    this.sergenero.getListGenero().subscribe((generos)=>{
      this.genero= generos;
    });
  }

  guardar():void{
      console.log(this.dato)
    this.api.guardarPersonales(this.dato).subscribe(
      personales=>{
        this.rouete.navigate(['/datos-personales']);
        //window.location.reload();
        console.log('Nuevo dato personal', "Nuevo ${this.dato.id_person} creado con exito");

      }
    );

  }
  editar(){
    this.api.editarPersonal(this.dato).subscribe(
      personal=>{
        this.rouete.navigate(['/datos-personales']);
        window.location.reload();
        console.log('Actualizado dato', `Actualizado ${this.dato.id_person}con exito`);
      },
      error => 'Error en la actualizacion'
    );
  }



}

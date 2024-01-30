import { Component, OnInit } from '@angular/core';
import { Datospersonales } from "../../Interfaces/datospersonales";
import { DatospersonalesService } from "../../Apis/datospersonales.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Genero } from "../../Interfaces/genero";
import { GeneroService } from "../../Apis/genero.service";
import { UsuarioService } from 'src/app/Apis/usuario.service';


@Component({
  selector: 'app-personales',
  templateUrl: './personales.component.html',
  styleUrls: ['./personales.component.css']
})
export class PersonalesComponent implements OnInit {
  dato: Datospersonales = new Datospersonales();
  genero: Genero[] = [];
  constructor(private api: DatospersonalesService,
    private rouete: Router,
    private active: ActivatedRoute,
    private sergenero: GeneroService,
    private seruus: UsuarioService) {
  }
  ngOnInit(): void {
    this.cargardatos();
    this.cargargenero();
   // this.relaciondatospersonalesusuario();
   // this.relaciondatospersonalesusuario();
  }
  cargardatos() {
    this.active.params.subscribe(params => {
      let id = params['id_person'];
      if (id) {
        this.api.getporIdpersonal(id).subscribe(
          (personales) => this.dato = personales,
          (error) => console.error('Error al cargar personales', error)
        )
      }
    });
  }
  cargargenero() {
    this.sergenero.getListGenero().subscribe((generos) => {
      this.genero = generos;
    });
  }
/*
  private relaciondatospersonalesusuario() {
    this.active.params.subscribe(
      params => {
        let id = params['id']
        if (id) {
          this.seruus.gerUsuarioById(id).subscribe((usuarios) => this.dato.usuario = usuarios);
        }
      }
    )
  }*/

  guardar(): void {
    console.log(this.dato)
    this.api.guardarPersonales(this.dato).subscribe(
      personales => {
        this.rouete.navigate(['/registro-escolares']);
        //window.location.reload();
        console.log('Nuevo dato personal', `Nuevo ${this.dato.id_person} creado con exito`);

      }
    );

  }
  editar() {
    this.api.editarPersonal(this.dato).subscribe(
      personal => {
        this.rouete.navigate(['/datos-personales']);
        window.location.reload();
        console.log('Actualizado dato', `Actualizado ${this.dato.id_person}con exito`);
      },
      error => 'Error en la actualizacion'
    );
  }



}

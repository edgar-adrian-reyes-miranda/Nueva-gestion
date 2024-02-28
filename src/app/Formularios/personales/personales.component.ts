import { Component, OnInit } from '@angular/core';
import { Datospersonales } from "../../Interfaces/datospersonales";
import { DatospersonalesService } from "../../Apis/datospersonales.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Genero } from "../../Interfaces/genero";
import { GeneroService } from "../../Apis/genero.service";
import { UsuarioService } from 'src/app/Apis/usuario.service';
import swal from "sweetalert2";
import {forkJoin} from "rxjs";


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
   }
  cargardatos() {
    this.active.params.subscribe(params => {
      let id_person = params['id_person'];
      if (id_person) {
        forkJoin({
          personales : this.api.getporIdpersonal(id_person),
          genero: this.sergenero.getListGenero()
        }).subscribe(
          ({personales, genero})=>{
            this.dato = personales;
            this.genero = genero;
          }

        )
      }
    });
  }
  cargargenero() {
    this.sergenero.getListGenero().subscribe((generos) => {
      this.genero = generos;
    });
  }

  guardar(): void {
       this.api.guardarPersonales(this.dato).subscribe(
      (personales: Datospersonales) => {
        swal.fire({
          position: "top-end",
          icon: "success",
          title: "Guardado con exito",
          showConfirmButton: false,
          timer: 1500
        });
        this.dato =personales;
        this.rouete.navigate(['/registro-escolares']);
        console.log('Nuevo dato personal', `Nuevo ${this.dato.id_person} creado con exito`);
      }
    );
  }

  editar() {
    this.api.editarPersonal(this.dato).subscribe(
      personal => {
        this.rouete.navigate(['/datos-personales']);
        console.log('Actualizado dato', `Actualizado ${this.dato.id_person}con exito`);
        swal.fire({
          position: "top-end",
          icon: "success",
          title: "Actualizado con exito",
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => 'Error en la actualizacion'
    );
  }


}

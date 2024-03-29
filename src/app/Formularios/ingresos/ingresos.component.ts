import { Component, OnInit } from '@angular/core';
import { Datosingresos } from "../../Interfaces/datosingresos";
import { Tramite } from "../../Interfaces/tramite";
import { Perfilamiento } from "../../Interfaces/perfilamiento";
import { Modalidad } from "../../Interfaces/modalidad";
import { Turno } from "../../Interfaces/turno";
import { DatosingresosService } from "../../Apis/datosingresos.service";
import { ActivatedRoute, Router } from "@angular/router";
import { TramiteService } from "../../Apis/tramite.service";
import { ModalidadService } from "../../Apis/modalidad.service";
import { TurnoService } from "../../Apis/turno.service";
import { PerfilamientoService } from "../../Apis/perfilamiento.service";
import { DatospersonalesService } from 'src/app/Apis/datospersonales.service';
import { Horarios } from 'src/app/Interfaces/horarios';
import { HorariosService } from 'src/app/Apis/horarios.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  ingreso: Datosingresos = new Datosingresos();
  tra: Tramite[] = [];
  perfis: Perfilamiento[] = [];
  moda: Modalidad[] = [];
  tunr: Turno[] = [];
  horario: Horarios[] = [];
  constructor(private api: DatosingresosService,
    private route: Router,
    private actived: ActivatedRoute,
    private sertram: TramiteService,
    private sermoda: ModalidadService,
    private serturn: TurnoService,
    private serperfi: PerfilamientoService,
    private serperson: DatospersonalesService,
    private serhora: HorariosService,
  ) {
  }

  ngOnInit(): void {
    this.cargardatos();
    this.cargartramite();
    this.cargarTurnos();
    this.cargarmodalidad();
    this.cargarPerfils();
    this.cargargarhorarios();
    //this.relacionescolaresingreso();
  }
  private cargardatos() {
    this.actived.params.subscribe(
      (params) => {
        let id = params['id_ingreso']
        if (id) {
          this.api.getporIdIngreso(id).subscribe(
            (ingreso) => this.ingreso = ingreso
          );
        }
      }
    )
  }
/*
  private relacionescolaresingreso() {
    this.actived.params.subscribe(
      params => {
        let id = params['id_escolar']
        if (id) {
          this.serperson.getporIdpersonal(id).subscribe((escolares) => this.ingreso.datosPersonales = escolares);
        }
      }
    )

  }*/

  private cargartramite() {
    this.sertram.getListTramite().subscribe((tramites) => this.tra = tramites);
  }
  private cargarmodalidad() {
    this.sermoda.getListModalidad().subscribe((modalidades) => this.moda = modalidades);
  }
  private cargarTurnos() {
    this.serturn.getListtunro().subscribe((turnos) => this.tunr = turnos);
  }
  private cargarPerfils() {
    this.serperfi.getListPerfil().subscribe((perfilamiento) => this.perfis = perfilamiento);
  }
  private cargargarhorarios() {
    this.serhora.getListHorario().subscribe((horarios) => this.horario = horarios);
  }
  guardar() {
    this.api.guardarIngreso(this.ingreso).subscribe(
      ingresos => {
        this.route.navigate(['/login']);
        console.log('Nuevo dato de ingreso', `Nuevo ${this.ingreso} creado con exito`);
      }
    );
  }
  editar() {
    this.api.editarIngreso(this.ingreso).subscribe(
      ingresos => {
        this.route.navigate(['/datos-ingresos']);
        console.log('Actualizado dato', `Actualizaco ${this.ingreso.id_ingreso}con exito`);
      }
    );
  }

}

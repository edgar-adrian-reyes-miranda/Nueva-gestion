import { Component, OnInit } from '@angular/core';
import { Datosescolares } from "../../Interfaces/datosescolares";
import { Universidades } from "../../Interfaces/universidades";
import { Modalidadescolares } from "../../Interfaces/modalidadescolares";
import { Planeducativo } from "../../Interfaces/planeducativo";
import { Periodo } from "../../Interfaces/periodo";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { ModalidadescolarService } from "../../Apis/modalidadescolar.service";
import { UniversidadesService } from "../../Apis/universidades.service";
import { PlaneducativoService } from "../../Apis/planeducativo.service";
import { PeriodoService } from "../../Apis/periodo.service";
import { DatosescolaresService } from "../../Apis/datosescolares.service";
import { DatospersonalesService } from 'src/app/Apis/datospersonales.service';

@Component({
  selector: 'app-escolares',
  templateUrl: './escolares.component.html',
  styleUrls: ['./escolares.component.css']
})
export class EscolaresComponent implements OnInit {
  escolares: Datosescolares = new Datosescolares();
  univerisdad: Universidades[] = [];
  modEs: Modalidadescolares[] = [];
  plan: Planeducativo[] = [];
  periodo: Periodo[] = [];

  constructor(private api: DatosescolaresService,
    private route: Router,
    private active: ActivatedRoute,
    private sermod: ModalidadescolarService,
    private seruni: UniversidadesService,
    private serplan: PlaneducativoService,
    private serperi: PeriodoService,
  private serperson:DatospersonalesService) {
  }
  ngOnInit(): void {
    this.cargardatos();
    this.cargarUniversidad();
    this.cargarModEscolar();
    this.cargarPeiodos();
    this.cargarPlanes();
    this.relacionpersonalesescolares();
  }
  private cargardatos() {
    this.active.params.subscribe(params => {
      let id = params['id_escolar'];
      if (id) {
        this.api.getpotIdEscolar(id).subscribe(
          (escolares) => this.escolares = escolares,
          (error) => console.error('Error al cargar escolares', error)
        )
      }
    }
    );
  }

  private relacionpersonalesescolares() {
    this.active.params.subscribe(
      params => {
        let id = params['id_person']
        if (id) {
          this.serperson.getporIdpersonal(id).subscribe((personas) => this.escolares.datosPersonales = personas);
        }
      }
    )
  }
  private cargarUniversidad() {
    this.seruni.getListUniversidad().subscribe((universidad) => {
      this.univerisdad = universidad;
    });
  }
  private cargarModEscolar() {
    this.sermod.getListEscolar().subscribe((escolares) => {
      this.modEs = escolares;
    });
  }
  private cargarPeiodos() {
    this.serperi.getListPeriodo().subscribe((periodos) => {
      this.periodo = periodos;
    });
  }
  private cargarPlanes() {
    this.serplan.getListPlan().subscribe((planes) => {
      this.plan = planes;
    });
  }
  guardar() {
    this.api.guardarEscolar(this.escolares).subscribe(
      escolares => {
        this.route.navigate(['/registro-ingresos'])
        console.log('Nuevo dato escolar', `Nuevo ${this.escolares.id_escolar}con exito`);
      }
    );
  }
  editar() {
    this.api.editarEscolar(this.escolares).subscribe(
      escolar => {
        this.route.navigate(['/registro-ingresos']);
        console.error('Actualizado dato', `Actualizado ${this.escolares.id_escolar}con exito`);
      }
    );
  }
}

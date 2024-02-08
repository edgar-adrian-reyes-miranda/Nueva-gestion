import { Component, OnInit } from '@angular/core';
import { Datosftd } from "../../Interfaces/datosftd";
import { Proyectos } from "../../Interfaces/proyectos";
import { Tutor } from "../../Interfaces/tutor";
import { Grupos } from "../../Interfaces/grupos";
import { Enlace } from "../../Interfaces/enlace";
import { Cursos } from "../../Interfaces/cursos";
import { DatosftdService } from "../../Apis/datosftd.service";
import { ActivatedRoute, Router } from "@angular/router";
import { TutorService } from "../../Apis/tutor.service";
import { GruposService } from "../../Apis/grupos.service";
import { EnlaceService } from "../../Apis/enlace.service";
import { CursosService } from "../../Apis/cursos.service";
import { ProyectosService } from "../../Apis/proyectos.service";
import { Estatusinfotec } from "../../Interfaces/estatusinfotec";
import { EstatusinfotecService } from "../../Apis/estatusinfotec.service";
import { DatospersonalesService } from 'src/app/Apis/datospersonales.service';
import flatpickr from 'flatpickr';
import { Spanish } from "flatpickr/dist/l10n/es";

@Component({
  selector: 'app-ftd',
  templateUrl: './ftd.component.html',
  styleUrls: ['./ftd.component.css']
})
export class FtdComponent implements OnInit {
  ftd: Datosftd = new Datosftd();
  proyec: Proyectos[] = [];
  turt: Tutor[] = [];
  grup: Grupos[] = [];
  enla: Enlace[] = [];
  curs: Cursos[] = [];
  estatus: Estatusinfotec[] = [];

  constructor(private api: DatosftdService,
    private route: Router,
    private active: ActivatedRoute,
    private serpro: ProyectosService,
    private sertut: TutorService,
    private sergrup: GruposService,
    private serela: EnlaceService,
    private sercurs: CursosService,
    private serestatus: EstatusinfotecService,
    private seringreso: DatospersonalesService) {
  }
  ngOnInit(): void {
    this.cargarcursos();
    this.cargartutor();
    this.cargarenlaces();
    this.cargartutor();
    this.cargargrupos();
    this.cargarproyectos();
    this.cargardatos();
    this.cargarestatusinfotec();

  }

  private cargardatos() {
    this.active.params.subscribe(
      (params) => {
        let id = params['id_ftd'];
        if (id) {
          this.api.getporIdFtd(id).subscribe(
            (FTDS) => this.ftd = FTDS
          );
        }
      }
    );
  }
  /*
  private relacioningresoftd() {
    this.active.params.subscribe(
      params => {
        let id = params['id_person']
        if (id) {
          this.seringreso.getporIdpersonal(id).subscribe((ingresos) => this.ftd.datosPersonales = ingresos);
        }
      }
    )
  }*/

  private inicializarCalendarios() {
    flatpickr("#fechaingreso", {
      locale: Spanish,
      dateFormat: "Y-m-d",
      onChange: (selectedDates, dateStr) => {
        this.ftd.fecha_ingreso = dateStr;
      }
    });

    flatpickr("#fechaTermino", {
      locale: Spanish, // Establece el idioma a español
      dateFormat: "Y-m-d", // Formato de fecha
      onChange: (selectedDates, dateStr) => {
        this.ftd.fecha_termino = dateStr; // Actualiza el modelo cuando cambia la fecha
      }
    });
  }

  private cargarproyectos() {
    this.serpro.getListProyecto().subscribe((proyectos) => this.proyec = proyectos)
  }
  private cargargrupos() {
    this.sergrup.getListGrupo().subscribe((grupos) => this.grup = grupos);
  }
  private cargarenlaces() {
    this.serela.getListEnlace().subscribe((enlaces) => this.enla = enlaces);
  }
  private cargartutor() {
    this.sertut.getListTutor().subscribe((tutores) => this.turt = tutores);
  }
  private cargarcursos() {
    this.sercurs.gerListCursos().subscribe((cursos) => this.curs = cursos);
  }
  private cargarestatusinfotec() {
    this.serestatus.getList().subscribe((estatus) => this.estatus = estatus);
  }
  guardar() {
    this.api.guardarFtd(this.ftd).subscribe(
      ftds => {
        this.route.navigate(['/General']);
        console.log('Nuevo ftd', `Nuevo ${this.ftd.id_ftd} creado con exito`);
      }
    );
  }
  editar() {
    this.api.editarFtd(this.ftd).subscribe(
      ftds => {
        this.route.navigate(['/datos-ftd']);
        console.log('Actualizado ftd', `Actualizado ${this.ftd.id_ftd} creado con exito`);
      }
    );
  }
}



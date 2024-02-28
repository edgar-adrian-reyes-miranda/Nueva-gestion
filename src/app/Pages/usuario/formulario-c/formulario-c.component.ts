import { Datosescolares } from './../../../Interfaces/datosescolares';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosescolaresService } from 'src/app/Apis/datosescolares.service';
import { DatosingresosService } from 'src/app/Apis/datosingresos.service';
import { DatospersonalesService } from 'src/app/Apis/datospersonales.service';
import { GeneroService } from 'src/app/Apis/genero.service';
import { HorariosService } from 'src/app/Apis/horarios.service';
import { ModalidadService } from 'src/app/Apis/modalidad.service';
import { ModalidadescolarService } from 'src/app/Apis/modalidadescolar.service';
import { PerfilamientoService } from 'src/app/Apis/perfilamiento.service';
import { PeriodoService } from 'src/app/Apis/periodo.service';
import { PlaneducativoService } from 'src/app/Apis/planeducativo.service';
import { TramiteService } from 'src/app/Apis/tramite.service';
import { TurnoService } from 'src/app/Apis/turno.service';
import { UniversidadesService } from 'src/app/Apis/universidades.service';
import { Datosingresos } from 'src/app/Interfaces/datosingresos';
import { Datospersonales } from 'src/app/Interfaces/datospersonales';
import { Genero } from 'src/app/Interfaces/genero';
import { Horarios } from 'src/app/Interfaces/horarios';
import { Modalidad } from 'src/app/Interfaces/modalidad';
import { Modalidadescolares } from 'src/app/Interfaces/modalidadescolares';
import { Perfilamiento } from 'src/app/Interfaces/perfilamiento';
import { Periodo } from 'src/app/Interfaces/periodo';
import { Planeducativo } from 'src/app/Interfaces/planeducativo';
import { Tramite } from 'src/app/Interfaces/tramite';
import { Turno } from 'src/app/Interfaces/turno';
import { Universidades } from 'src/app/Interfaces/universidades';
import {Usuarios} from "../../../Interfaces/usuarios";
import {UsuarioService} from "../../../Apis/usuario.service";

@Component({
  selector: 'app-formulario-c',
  templateUrl: './formulario-c.component.html',
  styleUrls: ['./formulario-c.component.css']
})
export class FormularioCComponent implements OnInit {
  usuario: Usuarios= new Usuarios();
  personales: Datospersonales = new Datospersonales();
  genero: Genero[] = [];
  escolares: Datosescolares = new Datosescolares();
  universidad: Universidades[] = [];
  modEs: Modalidadescolares[] = [];
  plan: Planeducativo[] = [];
  periodo: Periodo[] = [];
  ingresos: Datosingresos = new Datosingresos();
  tra: Tramite[] = [];
  perfil: Perfilamiento[] = [];
  moda: Modalidad[] = [];
  turn: Turno[] = [];
  horario: Horarios[] = [];

  constructor(private apip: DatospersonalesService, private apig: GeneroService,
    private apie: DatosescolaresService, private apiin: DatosingresosService,
    private apiplan: PlaneducativoService,
    private apipe: PeriodoService,
    private apiun: UniversidadesService,
    private apimod: ModalidadescolarService,
    private apitra: TramiteService,
    private apimoda: ModalidadService,
    private apiturn: TurnoService,
    private apiperf: PerfilamientoService,
    private apihora: HorariosService,
    private active: ActivatedRoute,
    private apiusu:UsuarioService,
    private route: Router) { }

  ngOnInit(): void {
    this.cargargenero();
    this.cargarpersonales();
    this.cargarescolares();
    this.cargarUniversidad();
    this.cargarModEscolar();
    this.cargarPeiodos();
    this.cargarPlanes();
    this.cargarescolares();
    this.cargaringresos();
    this.cargartramite();
    this.cargarmodalidad();
    this.cargarTurnos();
    this.cargarPerfils();
    this.cargargarhorarios();
  }
  private cargarusuario(){
    this.active.params.subscribe(
      params=>{
        let id = params['id'];
        if(id){
          this.apiusu.gerUsuarioById(id).subscribe((usuario)=> this.usuario = usuario,
            (error)=> console.error('Error al cargar al usuarios', error));
        }
      }
    );
  }

  private cargarpersonales() {
    this.active.params.subscribe(
      params => {
        let id = params['id_person'];
        if (id) {
          this.apip.getporIdpersonal(id).subscribe((personales) => this.personales = personales,
            (error) => console.error('Error en la cargar de datos', error));
        }
      }
    );
  }

  private cargarescolares() {
    this.active.params.subscribe(
      params => {
        let id = params['id_escolar'];
        if (id) {
          this.apie.getpotIdEscolar(id).subscribe(
            (escolares) => this.escolares = escolares,
            (error) => console.error('Error al cargar los escolares', error)
          );
        }
      }
    );
  }

  private cargaringresos() {
    this.active.params.subscribe(
      (params) => {
        let id = params['id_ingreso'];
        if (id) {
          this.apiin.getporIdIngreso(id).subscribe(
            (ingresos) => this.ingresos = ingresos
          );
        }
      }
    );
  }
  private cargargenero() {
    this.apig.getListGenero().subscribe((generos) => {
      this.genero = generos;
    })
  }

  private cargarUniversidad() {
    this.apiun.getListUniversidad().subscribe((universidad) => {
      this.universidad = universidad;
    });
  }
  private cargarModEscolar() {
    this.apimod.getListEscolar().subscribe((escolares) => {
      this.modEs = escolares;
    });
  }
  private cargarPeiodos() {
    this.apipe.getListPeriodo().subscribe((periodos) => {
      this.periodo = periodos;
    });
  }
  private cargarPlanes() {
    this.apiplan.getListPlan().subscribe((planes) => {
      this.plan = planes;
    });
  }

  private cargartramite() {
    this.apitra.getListTramite().subscribe((tramites) => this.tra = tramites);
  }
  private cargarmodalidad() {
    this.apimoda.getListModalidad().subscribe((modalidades) => this.moda = modalidades);
  }
  private cargarTurnos() {
    this.apiturn.getListtunro().subscribe((turnos) => this.turn = turnos);
  }
  private cargarPerfils() {
    this.apiperf.getListPerfil().subscribe((perfilamiento) => this.perfil = perfilamiento);
  }
  private cargargarhorarios() {
    this.apihora.getListHorario().subscribe((horarios) => this.horario = horarios);
  }




  editar() {

  }
}

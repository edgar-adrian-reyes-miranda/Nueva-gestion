import {Component, OnInit} from '@angular/core';
import {Datosingresos} from "../../Interfaces/datosingresos";
import {Tramite} from "../../Interfaces/tramite";
import {Perfilamiento} from "../../Interfaces/perfilamiento";
import {Modalidad} from "../../Interfaces/modalidad";
import {Turno} from "../../Interfaces/turno";
import {DatosingresosService} from "../../Apis/datosingresos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TramiteService} from "../../Apis/tramite.service";
import {ModalidadService} from "../../Apis/modalidad.service";
import {TurnoService} from "../../Apis/turno.service";
import {PerfilamientoService} from "../../Apis/perfilamiento.service";

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements  OnInit{
  ingreso:Datosingresos= new Datosingresos();
  tra:Tramite[]=[];
  perfis:Perfilamiento[]=[];
  moda:Modalidad[]=[];
  tunr:Turno[]=[];
  constructor(private api:DatosingresosService,
              private route:Router,
              private actived:ActivatedRoute,
              private sertram:TramiteService,
              private sermoda:ModalidadService,
              private serturn:TurnoService,
              private serperfi:PerfilamientoService) {
  }

  ngOnInit(): void {
    this.cargardatos();
    this.cargartramite();
    this.cargarTurnos();
    this.cargarmodalidad();
    this.cargarPerfils();
  }
  private cargardatos(){
    this.actived.params.subscribe(
      (params)=>{
        let id = params['id_ingreso']
        if (id){
          this.api.getporIdIngreso(id).subscribe(
            (ingreso)=> this.ingreso=ingreso
          );
        }
      }
    )
  }
  private cargartramite(){
    this.sertram.getListTramite().subscribe((tramites)=>this.tra=tramites);
  }
  private cargarmodalidad(){
  this.sermoda.getListModalidad().subscribe((modalidades)=>this.moda=modalidades);
  }
  private cargarTurnos(){
    this.serturn.getListtunro().subscribe((turnos)=>this.tunr=turnos);
  }
  private cargarPerfils(){
  this.serperfi.getListPerfil().subscribe((perfilamiento)=>this.perfis=perfilamiento);
  }
  guardar(){
    this.api.guardarIngreso(this.ingreso).subscribe(
      ingresos=>{
        this.route.navigate(['/login']);
        console.log('Nuevo dato de ingreso',`Nuevo ${this.ingreso.id_ingreso} creado con exito`);
      }
    );
  }
  editar(){
    this.api.editarIngreso(this.ingreso).subscribe(
      ingresos=>{
        this.route.navigate(['/datos-personales']);
        console.log('Actualizado dato',`Actualizaco ${this.ingreso.id_ingreso}con exito`);
      }
    );
  }

}

import {Periodo} from "./periodo";
import {Universidades} from "./universidades";
import {Planeducativo} from "./planeducativo";
import {Modalidadescolares} from "./modalidadescolares";
import {Datospersonales} from "./datospersonales";

export class Datosescolares {
  id_escolar?:number;
  matricula:string='';
  corroe_inst:string='';
  carrera:string='';
  periodo: Periodo= new Periodo();
  nombre_uni:Universidades= new Universidades();
  plan:Planeducativo= new Planeducativo();
  modalidad_escolar :Modalidadescolares= new Modalidadescolares();
  dato:Datospersonales= new Datospersonales();
}

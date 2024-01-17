import { Periodo } from "./periodo";
import { Universidades } from "./universidades";
import { Planeducativo } from "./planeducativo";
import { Modalidadescolares } from "./modalidadescolares";
import { Datospersonales } from "./datospersonales";

export class Datosescolares {
  id_escolar?: number;
  correo_inst: string = '';
  carrera: string = '';
  matricula: string = '';
  universidades: Universidades = new Universidades();
  modalidadesEscolares: Modalidadescolares = new Modalidadescolares();
  planEducativo: Planeducativo = new Planeducativo();
  periodo: Periodo = new Periodo();
  datosPersonales: Datospersonales = new Datospersonales();
}

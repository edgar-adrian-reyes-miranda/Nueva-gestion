import { Cursos } from "./cursos";
import { Estatusinfotec } from "./estatusinfotec";
import { Grupos } from "./grupos";
import { Tutor } from "./tutor";
import { Proyectos } from "./proyectos";
import { Datospersonales } from "./datospersonales";
import { Enlace } from "./enlace";

export class Datosftd {
  id_ftd?: number;
  area: string = '';
  beca: string = '';
  becadocumenot: string = '';
  fecha_ingreso: string = '';
  fecha_termino: string = '';
  matricula_ftd: string = '';
  correo_becario: string = '';
  proyectos: Proyectos = new Proyectos();
  tutores: Tutor = new Tutor();
  grupos: Grupos = new Grupos();
  enlace: Enlace = new Enlace();
  estatusInfotec: Estatusinfotec = new Estatusinfotec();
  cursos: Cursos = new Cursos();
  //datosPersonales: Datospersonales = new Datospersonales();

}

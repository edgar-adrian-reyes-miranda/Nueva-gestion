import {Cursos} from "./cursos";
import {Estatusinfotec} from "./estatusinfotec";
import {Grupos} from "./grupos";
import {Tutor} from "./tutor";
import {Proyectos} from "./proyectos";
import {Datospersonales} from "./datospersonales";
import {Enlace} from "./enlace";

export class Datosftd {
  id_ftd?:number;
  area:string='';
  fecha_ingreso:string='';
  fecha_termino:string='';
  correo_becario:string='';
  matricula_ftd:string='';
  beca:string='';
  becadocumenot:string='';
  nombre_curso:Cursos= new Cursos();
  estatus:Estatusinfotec= new Estatusinfotec();
  enlace:Enlace= new Enlace();
  nombre_grupo:Grupos= new Grupos();
  tutor:Tutor= new Tutor();
  nombre_proyecto:Proyectos= new Proyectos();
  dato:Datospersonales = new Datospersonales();
}

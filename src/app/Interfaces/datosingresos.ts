import { Tramite } from "./tramite";
import { Perfilamiento } from "./perfilamiento";
import { Horarios } from "./horarios";
import { Datospersonales } from "./datospersonales";
import { Turno } from "./turno";
import { Modalidad } from "./modalidad";

export class Datosingresos {
  id_ingreso?: number;
  cv: string = '';
  historial_Academico: string = '';
  tramite: Tramite = new Tramite();
  perfilamiento: Perfilamiento = new Perfilamiento();
  turno: Turno = new Turno();
  horarios: Horarios = new Horarios();
  modalidad: Modalidad = new Modalidad();
  //datosPersonales: Datospersonales = new Datospersonales();

}

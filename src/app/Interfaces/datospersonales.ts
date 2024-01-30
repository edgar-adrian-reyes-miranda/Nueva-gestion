import { Usuarios } from "./usuarios";
import { Genero } from "./genero";
export class Datospersonales {
  id_person?: number;
  nombre: string = '';
  p_apellido: string = '';
  s_apellido: string = '';
  curp: string = '';
  direccion: string = '';
  estados: string = '';
  municipio: string = '';
  edad?: number;
  telefono?: number;
  telefono_casa?: number;
  correo: string = '';
  genero: Genero = new Genero();
  //usuario: Usuarios = new Usuarios();

}

import { Datospersonales } from "./datospersonales";

export class Usuarios {
  id: number = 0;
  username: string = '';
  password: string = '';
  correo: string = '';
  datopersonales: Datospersonales = new Datospersonales();
}

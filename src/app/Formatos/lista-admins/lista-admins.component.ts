import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminsService } from 'src/app/Apis/admins.service';
import { UsuarioService } from 'src/app/Apis/usuario.service';
import { Admins } from 'src/app/Interfaces/admins';
import { Usuarios } from 'src/app/Interfaces/usuarios';
import swal from "sweetalert2";

@Component({
  selector: 'app-lista-admins',
  templateUrl: './lista-admins.component.html',
  styleUrls: ['./lista-admins.component.css']
})
export class ListaAdminsComponent implements OnInit {

  usuario: Usuarios[] = [];
  usu: Usuarios = new Usuarios;
  adm: Admins[] = [];
  admins: Admins = new Admins();
  constructor(private apisus: UsuarioService,
    private api: AdminsService,
    private route: Router,
    private actived: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarusuario();
    this.cargaradmins();
    this.api.getAll().subscribe(
      (Data: Admins[]) => {
        this.adm = Data;
      },
      (error) => {
        console.error('Error en la lista', error);
      }
    );
    this.apisus.getAllUsuario().subscribe(
      (data: Usuarios[]) => {
        this.usuario = data;
      },
      (error) => {
        console.error('Error en lista', error);
      }
    );
  }


  private cargarusuario() {
    this.actived.params.subscribe(
      (params) => {
        let id = params['id'];
        if (id) {
          this.apisus.gerUsuarioById(id).subscribe(
            (usuarios) => (this.usu = usuarios),
            (error) => {
              console.error('Error al cargar la lista', error);
            }
          );
        }
      }
    );
  }

  private cargaradmins() {
    this.actived.params.subscribe(
      (params) => {
        let id = params['id_admin'];
        if (id) {
          this.api.getAdminId(id).subscribe(
            (admins) => (this.admins = admins),
            (error) => {
              console.error('Error al cargar la lista', error);
            }
          );
        }
      }
    );
  }

  //tabla
  eliminar(id: number | undefined) {
    if (typeof id === 'number') {
      this.api.eliminarAdmin(id).subscribe(
        res => {
          this.actualizarlista();
        },
        error => console.error('Error al eliminar', error.console.error));
    } else {
      console.error('ID del admin no valido', id);
    }
  }

  private actualizarlista() {
    this.api.getAll().subscribe(
      (data: Admins[]) => {
        this.adm = data;
        swal.fire({
          position: "center",
          icon: "success",
          title: "Actualizada la lista de  Administrador",
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => console.error('Error al actualizar la lista', error),
      () => console.log('Actalizada con exito la lista')
    );
  }
  //usuarios
  private actualizarusuarios() {
    this.apisus.getAllUsuario().subscribe(
      (data: Usuarios[]) => {
        this.usuario = data;
        swal.fire({
          position: "center",
          icon: "success",
          title: "Actualizada la lista de  Administrador",
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => console.error('Error al actualizar la lista', error),
      () => console.log('Actalizada con exito la lista')
    );
  }

  eliminarUsuario(id: number | undefined) {
    if (typeof id === 'number') {
      this.apisus.EliminarUsuario(id).subscribe(
        res => {
          this.actualizarusuarios();
        },
        error => console.error('Error al eliminar', error.console.error));
    } else {
      console.error('ID del admin no valido', id);
    }
  }
}

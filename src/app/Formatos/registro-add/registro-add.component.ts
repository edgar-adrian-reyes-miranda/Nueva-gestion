import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminsService } from 'src/app/Apis/admins.service';
import { UsuarioService } from 'src/app/Apis/usuario.service';
import { Admins } from 'src/app/Interfaces/admins';
import { Usuarios } from 'src/app/Interfaces/usuarios';
import swal from "sweetalert2";

@Component({
  selector: 'app-registro-add',
  templateUrl: './registro-add.component.html',
  styleUrls: ['./registro-add.component.css']
})
export class RegistroAddComponent implements OnInit {
  admins: Admins = new Admins();
  adm: Admins[] = [];
  page!: number;
  usuario: Usuarios[] = [];
  usus: Usuarios = new Usuarios();

  constructor(private api: AdminsService,
    private apiusus: UsuarioService,
    private route: Router,
    private actived: ActivatedRoute,) { }

  ngOnInit(): void {
    this.api.getAll().subscribe(
      (data: Admins[]) => {
        this.adm = data;
      },
      (error) => {
        console.error('Error al cargar la lista', error);
      }
    );
    this.cargarAdmins();
    this.apiusus.getAllUsuario().subscribe(
      (data: Usuarios[]) => {
        this.usuario = data;
      },
      (error) => {
        console.error('Error al cargar la lista', error);
      }
    );
    this.cargarUsuario();

  }


  private cargarAdmins() {
    this.actived.params.subscribe(
      (params) => {
        let id = params['id_admin'];
        if (id) {
          this.api.getAdminId(id).subscribe(
            (administradores) => (this.admins = administradores),
            (error) => {
              console.error('Error en la lista', error)
            }
          );
        }
      }
    );
  }
  private cargarUsuario() {
    this.actived.params.subscribe(
      (params) => {
        let id = params['id'];
        if (id) {
          this.apiusus.gerUsuarioById(id).subscribe(
            (usuarios) => (this.usus = usuarios),
            (error) => {
              console.error('Error en la lista', error);
            }
          );
        }
      }
    );
  }

  private actualizarlista() {
    this.api.getAll().subscribe(
      (Data: Admins[]) => {
        console.log('Actualizada la lista', Data);
        this.adm = Data;
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
  guardar() {
    this.api.registroAdmin(this.admins).subscribe(
      adminis => {
        this.route.navigate(['/lista-admins']);
        // window.location.reload();
        console.log('Nuevo admn', `Nuevo ${this.admins.id_admin} con exito`);
        swal.fire({
          position: "center",
          icon: "success",
          title: "Nuevo Administrador",
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error) => {
        console.error('Error al guardar el admin', error);
        swal.fire({
          position: "center",
          icon: "error",
          title: "Error al guardar",
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  }
  editar() {
    this.api.editarAdm(this.admins).subscribe(
      admins => {
        this.route.navigate(['/registro-admins']);
        window.location.reload();
        console.log('Admin Actualizado', `Actualizado ${this.admins.id_admin}con exito`);
        swal.fire({
          position: "center",
          icon: "success",
          title: "Actualizado el Administrador",
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error) => {
        console.error('Error al actualiazar', error);
        swal.fire({
          position: "center",
          icon: "error",
          title: "Error al Actualizar",
          showConfirmButton: false,
          timer: 1500
        });
      }
    )

  }
  ///tabla
  eliminar(id: number | undefined) {
    if (typeof id === 'number') {
      this.api.eliminarAdmin(id).subscribe(
        res => {
          console.log('Elimando el admin');
          this.actualizarlista();
        },
        error => console.error('Error al eliminar el admin', error.error));
    } else {
      console.error('ID del admin no valido', id);
    }
  }

}


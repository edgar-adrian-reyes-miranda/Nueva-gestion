import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminsService } from 'src/app/Apis/admins.service';
import { UsuarioService } from 'src/app/Apis/usuario.service';
import { Admins } from 'src/app/Interfaces/admins';
import { Usuarios } from 'src/app/Interfaces/usuarios';

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
    private actived: ActivatedRoute) { }

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

}

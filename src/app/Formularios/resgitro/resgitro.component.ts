import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Usuarios } from 'src/app/Interfaces/usuarios';
import { UsuarioService } from 'src/app/Apis/usuario.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-resgitro',
  templateUrl: './resgitro.component.html',
  styleUrls: ['./resgitro.component.css']
})
export class ResgitroComponent implements OnInit {
  registro: Usuarios = new Usuarios();

  constructor(private api: UsuarioService,
    private route: Router,
    private actived: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.cargarnuevo();
  }

  private cargarnuevo(){
    this.actived.params.subscribe(
      params => {
        let id = params['id'];
        if (id) {
          this.api.gerUsuarioById(id).subscribe(
            (usuarios) => this.registro = usuarios,
            (error) => console.error('Error al cargar el usaurio', error)
          );
        }
      }
    );
  }

  guardar() {
    this.api.registroUsuario(this.registro).subscribe(
      (usurios: Usuarios) => {
        swal.fire({
          position: "top-end",
          icon: "success",
          title: "Inicio Exitoso",
          showConfirmButton: true,
          timer: 1500
        });
        this.route.navigate(['/retorno', {id: usurios.id}]);
      },
      (error) => {
        swal.fire({
          position: "top-end",
          icon: "error",
          title: "Revisar credenciales",
          showConfirmButton: true,
          timer: 1500,
        });
        this.route.navigate(['/registro']);
      }
    )
  }
  editar() {
    this.api.editarUsuario(this.registro).subscribe(
      usuario => {
        this.route.navigate(['/lista-admins']);
        console.log('Actualizacion de usuario', 'Actualizacion ${this.registro.id}, con exito')
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
    );
  }
}

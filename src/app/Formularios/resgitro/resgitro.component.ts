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
        this.route.navigate(['/registro-personales']);
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

  }
}

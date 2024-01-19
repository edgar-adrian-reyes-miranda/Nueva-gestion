import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Usuarios } from 'src/app/Interfaces/usuarios';
import { UsuarioService } from 'src/app/Apis/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuarios = new Usuarios();

  constructor(private api: UsuarioService,
    private router: Router) {
  }
  ngOnInit(): void {
  }

  acceso() {
    this.api.login(this.usuario).subscribe(
      response => {
        console.log('Respuesta del servidor', response);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Inicio Exitoso",
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/vistaUsuario']);
      }
      ,
      (error) => {
        console.error('Error en el inicio de sesión:', error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Revisar credenciales",
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['']);
      }
    );
  }

}


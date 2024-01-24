import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Usuarios } from 'src/app/Interfaces/usuarios';
import { UsuarioService } from 'src/app/Apis/usuario.service';
import swal from 'sweetalert2';
import { Admins } from 'src/app/Interfaces/admins';
import { AdminsService } from 'src/app/Apis/admins.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  compa = {
    username: '',
    password: '',
    tipo: ''
  };
  usuario: Usuarios = new Usuarios();
  admins: Admins = new Admins();


  constructor(private api: UsuarioService,
    private apiadm: AdminsService,
    private router: Router) {
  }
  ngOnInit(): void {
  }

  acceso() {
    if (this.compa.tipo === 'usuario') {
      this.api.login(this.compa).subscribe(
        (response) => {
          console.log('Acceso concedido', response);
          swal.fire({
            position: "top-end",
            icon: "success",
            title: "Inicio Exitoso",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/vistaUsuario']);
        },
        (error) => {
          console.error('Error en el inicio de sesión', error);
          swal.fire({
            position: "top-end",
            icon: "error",
            title: "Revisar Credenciales",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['']);
        }
      );
    } else if (this.compa.tipo == 'admins') {
      this.apiadm.login(this.compa).subscribe(
        (response) => {
          console.log('Acceso concedido', response);
          swal.fire({
            position: "top-end",
            icon: "success",
            title: "Inicio Exitoso",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/General']);
        },
        (error) => {
          console.error('Error en el inicio de sesión', error);
          swal.fire({
            position: "top-end",
            icon: "error",
            title: "Revisar Credenciales",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['']);
        }
      );
    } else {
      console.error('Erro el tipo usuario no encontrado');
    }
  }


}


import {Component, OnInit} from '@angular/core';
import {AccesoService} from "../../Apis/acceso.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit{
  username:string='';
  password:string='';
  constructor(private apiSer:AccesoService, private router:Router) {
  }
  ngOnInit(): void {
  }

  login() {
    const loginData = { username: this.username, password: this.password };

    this.apiSer.logueo(loginData).subscribe(
      (response) => {
        if (response === 'Inicio de sesión exitoso') {
          console.log('Inicio de sesión exitoso');
          // Redirige a tu componente específico después de un inicio de sesión exitoso
          this.router.navigate(['/vistaUsuario']);
        } else {
          console.log('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
          // Puedes manejar el caso de credenciales incorrectas aquí si es necesario
        }
      },
      (error) => {
        console.error('Error al iniciar sesión', error);
        // Puedes manejar otros tipos de errores si es necesario
      }
    );
  }
}


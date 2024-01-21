import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsService } from 'src/app/Apis/admins.service';
import { Admins } from 'src/app/Interfaces/admins';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admins: Admins = new Admins();

  constructor(private api: AdminsService,
    private route: Router) {
  }
  ngOnInit(): void {
  }
  admin() {
    this.api.login(this.admins).subscribe(
      response => {
        console.log('Logueo completo', response);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Inicio Exitoso",
          showConfirmButton: false,
          timer: 1500
        });
        this.route.navigate(['/General']);
      },
      (error) => {
        console.error('Error en el inicio de sesión:', error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Revisar credenciales",
          showConfirmButton: false,
          timer: 1500,
        });
        this.route.navigate(['']);
      }
    );
  }
}

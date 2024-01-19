import { Component, OnInit } from '@angular/core';
import { Proyectos } from "../../Interfaces/proyectos";
import { ProyectosService } from "../../Apis/proyectos.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[] = [];
  proyec: Proyectos = new Proyectos();

  constructor(private api: ProyectosService,
    private route: Router,
    private actived: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.api.getListProyecto().subscribe((data: Proyectos[]) => {
      this.proyectos = data;
    });
    this.cargarproyectos();
  }
  private cargarproyectos() {
    this.actived.params.subscribe((params) => {
      let id = params['id_proyecto'];
      if (id) {
        this.api.getporIdproyecto(id).subscribe((proyectoss) => this.proyec = proyectoss);
      }
    });
  }
  guardar() {
    this.api.guardarProyecto(this.proyec).subscribe(
      proyecs => {
        this.route.navigate(['/proyectos']);
        window.location.reload();
        console.log('Nuevo proyecto', `Nuevo ${this.proyec.nombre} creado con exoto`);
      }
    );
  }
  editar() {
    this.api.editarProyecto(this.proyec).subscribe(
      proyecs => {
        this.route.navigate(['/proyectos']);
        window.location.reload();
        console.log('Actualizacion proyecto', `Actualizacion ${this.proyec.nombre} actualizado con exito`);
      }
    );
  }


  ///tabla

  private actualizacionlista() {
    this.api.getListProyecto().subscribe(
      (data: Proyectos[]) => {
        console.log('Lista de proyectos actualizada', data);
        this.proyectos = data;
      },
      error => console.error('Error en la obtencion de la lista', error),
      () => console.log('Actualizacion de lista ')
    );
  }
  eliminar(id_proyecto: number | undefined) {
    if (typeof id_proyecto === 'number') {
      this.api.eliminarProyecto(id_proyecto).subscribe(
        res => {
          console.log('Eliminado proyecto');
          window.location.reload();
          this.actualizacionlista();
        },
        error => console.error('Error al eliminar, error.error'));
    } else {
      console.error('ID de proyecto no valido', id_proyecto);
    }
  }
  editarproyecto() {

  }

}


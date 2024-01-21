import { Component, OnInit } from '@angular/core';
import { Universidades } from "../../Interfaces/universidades";
import { UniversidadesService } from "../../Apis/universidades.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.component.html',
  styleUrls: ['./universidad.component.css']
})
export class UniversidadComponent implements OnInit {
  universidad: Universidades[] = [];
  uni: Universidades = new Universidades();
  page!: number;

  constructor(private api: UniversidadesService,
    private router: Router,
    private activedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.api.getListUniversidad().subscribe(
      (data: Universidades[]) => {
        this.universidad = data;
      },
      (error) => {
        console.error('Error al cargar la Universidad', error)
      }
    );
    this.CargarUniversidad();
  }
  private CargarUniversidad(): void {
    this.activedRoute.params.subscribe(
      (params) => {
        let id = params['id_uni']
        if (id) {
          this.api.getporIdUniversodad(id).subscribe(
            (universidad) => (this.uni = universidad),
            (error) => {
              console.error('Error al cargar la lista', error)
            }
          );
        }
      });
  }

  guardar() {
    this.api.guardarUniversodad(this.uni).subscribe(
      universidad => {
        this.router.navigate(['/universidades']);
        window.location.reload();
        console.log('Nueva universidad', `Nueva ${this.uni.nombre} con exito`);
      }
    )
  }
  editar() {
    this.api.editarUniversidad(this.uni).subscribe(
      universidad => {
        this.router.navigate(['/universidades']);
        window.location.reload();
        console.log('Universidad actualizada', `Universodad ${this.uni.nombre} actualizada con exito`);
      },
      error => 'Error en al actualizar');

  }
  ///tabla
  private ActualizarLista() {
    this.api.getListUniversidad().subscribe(
      (data: Universidades[]) => {
        console.log('Lista de universidades actualizada', data);
        this.universidad = data;
      },
      error => console.error('Error en la lista', error),
      () => console.log('Actualizacion completa')
    );
  }
  eliminar(id: number | undefined) {
    if (typeof id === 'number') {
      this.api.eliminarUniversidad(id).subscribe(
        res => {
          console.log('Universidad Eliminada con exito');
          window.location.reload();
          this.ActualizarLista();
        },
        error => console.error('Error en la eliminacion', error.error)
      );
    } else {
      console.error('Id de universidad no valido', id);
    }
  }

  editarUni(id_uni: number | undefined) {
    if (id_uni !== undefined) {
      this.router.navigate(['/universidades/forms', id_uni]);
    } else {
      console.error('ID de universidad no valido', id_uni);
    }
  }

}

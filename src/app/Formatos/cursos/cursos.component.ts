import { Component, OnInit, signal } from '@angular/core';
import { Cursos } from "../../Interfaces/cursos";
import { CursosService } from "../../Apis/cursos.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  curso: Cursos[] = [];
  curs: Cursos = new Cursos();
  page!: number;

  constructor(private api: CursosService,
    private route: Router,
    private activeRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.api.gerListCursos().subscribe(
      (data: Cursos[]) => {
        console.log('Lista de cursos', data);
        this.curso = data;
      }
    )
    this.cargarcursos();
  }
  private cargarcursos(): void {
    this.activeRoute.params.subscribe(params => {
      let id = params['id_curso']
      if (id) {
        this.api.getporIdCursos(id).subscribe(
          (curso) => this.curs = curso);
      }
    }
    );
  }
  guardar() {
    this.api.guardarCursos(this.curs).subscribe(
      curso => {
        this.route.navigate(['/cursos'])
        console.log('Nuevo curso', `Nuevo${this.curs.nombre}creado con exito`);
        console.log('Nuevo curso', `Nuevo${this.curs.tipo_estatus}creado con exito`);
        console.log('Nuevo curso', `Nuevo${this.curs.unidad}creado con exito`);
        window.location.reload();
      }
    );
  }

  editar() {
    this.api.editarCurso(this.curs).subscribe(
      curso => {
        this.route.navigate(['/cursos'])
        console.log('Actualizcion de curso', `Creado${this.curs.nombre}actualizado con exito`);
        console.log('Actualizcion de curso', `Creado${this.curs.tipo_estatus}actualizado con exito`);
        console.log('Actualizcion de curso', `Creado${this.curs.unidad}actualizado con exito`);
        window.location.reload();
      },
      error => 'Error al editar ');
  }
  ///tabla

  private ActualizacionListaCursos() {
    this.api.gerListCursos().subscribe(
      (data: Cursos[]) => {
        console.log('Datos actualizados', data);
        this.curso = data;
      },
      error => console.error('Error al cargar la lista', error),
      () => console.log('Actualizacion de lista ')
    );
  }
  eliminar(id: number | undefined) {
    if (typeof id === 'number') {
      this.api.softdelete(id).subscribe(
        res => {
          console.log('Eliminado con exito');
          window.location.reload();
          this.ActualizacionListaCursos();
        },
        error => console.error('Error al eliminar ', error.error)
      );
    } else {
      console.error('ID de curso no valido', id);
    }
  }
  editarCurso(id_curso: number | undefined) {
    if (id_curso !== undefined) {
      this.route.navigate(['/cursos/forms/', id_curso])
    } else {
      console.error('ID de curso no valido', id_curso)
    }
  }
}

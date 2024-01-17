import { Component, OnInit } from '@angular/core';
import { Datosescolares } from "../../Interfaces/datosescolares";
import { DatosescolaresService } from "../../Apis/datosescolares.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-lista-escolares',
  templateUrl: './lista-escolares.component.html',
  styleUrls: ['./lista-escolares.component.css']
})
export class ListaEscolaresComponent implements OnInit {
  escolare: Datosescolares[] = [];
  constructor(private api: DatosescolaresService,
    private route: Router) {
  }
  ngOnInit(): void {
    this.api.getListEscolares().subscribe(
      (Data: Datosescolares[]) => {
        this.escolare = Data;
      }
    )
  }

  private actualizarlsita() {
    this.api.getListEscolares().subscribe(
      (data: Datosescolares[]) => {
        this.escolare = data;
      },
      error => console.error('ERROR AL ELIMINAR', error),
      () => console.log('actualizacion completa')
    );
  }
  eliminar(id: number | undefined) {
    if (typeof id === 'number') {
      this.api.eliminarEscoalr(id).subscribe(
        res => {
          this.actualizarlsita();
        },
        error => console.error('error al eliminar', error.error)
      );
    } else {
      console.error('ID DE DATOS ESCOLARES NO VALIDO', id);
    }
  }

}

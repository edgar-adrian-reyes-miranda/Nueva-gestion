import { Component, OnInit } from '@angular/core';
import { Datosingresos } from "../../Interfaces/datosingresos";
import { DatosingresosService } from "../../Apis/datosingresos.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-lista-ingresos',
  templateUrl: './lista-ingresos.component.html',
  styleUrls: ['./lista-ingresos.component.css']
})
export class ListaIngresosComponent implements OnInit {
  ingre: Datosingresos[] = [];

  constructor(private api: DatosingresosService,
    private route: Router) {
  }
  ngOnInit(): void {
    this.api.getListIngreso().subscribe(
      (data: Datosingresos[]) => {
        this.ingre = data;
      }
    )
  }

  private actualizarlista() {
    this.api.getListIngreso().subscribe(
      (Data: Datosingresos[]) => {
        this.ingre = Data;
      },
      error => console.error('Error al eliminar el dato', error),
      () => console.log('Actualizacion completa')
    );
  }

  eliminar(id: number | undefined) {
    if (typeof id === 'number') {
      this.api.eliminarIngreso(id).subscribe(
        res => {
          this.actualizarlista();
        },
        error => console.error('Error al eliminar el dato', error.error)
      );
    } else {
      console.error('ID de datos personale no valido', id);
    }
  }

}

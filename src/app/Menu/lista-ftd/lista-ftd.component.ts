import { Component, OnInit } from '@angular/core';
import { Datosftd } from "../../Interfaces/datosftd";
import { DatosftdService } from "../../Apis/datosftd.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-lista-ftd',
  templateUrl: './lista-ftd.component.html',
  styleUrls: ['./lista-ftd.component.css']
})
export class ListaFtdComponent implements OnInit {
  ftd: Datosftd[] = [];
  constructor(private api: DatosftdService,
    private rute: Router) {
  }
  ngOnInit(): void {
    this.api.getListFtd().subscribe(
      (Data: Datosftd[]) => {
        this.ftd = Data;
        console.log('Lista completa', Data);
      },
      (error) => console.error('Error al obtener la lista', error),
      () => console.log('Obtencion de lista completa')
    );
  }

  private ActualizarLista() {
    this.api.getListFtd().subscribe(
      (data: Datosftd[]) => {
        this.ftd = data;
      },
      error => console.error('Error  al actualizar la lista', error),
      () => console.log('Actualizacion de lista completa')
    );
  }

  eliminar(id: number | undefined) {
    if (typeof id === 'number') {
      this.api.eliminarftd(id).subscribe(
        res => {
          this.ActualizarLista();
        },
        error => console.error('Error al eliminar el dato', error.error)
      );
    } else {
      console.error('ERROR en el ID de ftd', id);
    }
  }

}

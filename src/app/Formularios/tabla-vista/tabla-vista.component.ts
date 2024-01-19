import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosingresosService } from 'src/app/Apis/datosingresos.service';
import { DatospersonalesService } from 'src/app/Apis/datospersonales.service';
import { Datospersonales } from 'src/app/Interfaces/datospersonales';

@Component({
  selector: 'app-tabla-vista',
  templateUrl: './tabla-vista.component.html',
  styleUrls: ['./tabla-vista.component.css']
})
export class TablaVistaComponent implements OnInit {
  lista: Datospersonales[] = [];

  constructor(private api: DatospersonalesService,
    private route: Router,
    private actived: ActivatedRoute) {

  }

  ngOnInit(): void {

  }

  private cargarporidPersonales() {
    this.actived.params.subscribe(
      params => {
        let id = params['id_person']
        if (id) {
          this.api.getporIdpersonal(id).subscribe(
            
          (error)=>console.error('Error al cargar el id', error)
          )
        }
      }
    )

  }

}

import {Component, OnInit} from '@angular/core';
import {Modalidad} from "../../Interfaces/modalidad";
import {ModalidadService} from "../../Apis/modalidad.service";

@Component({
  selector: 'app-modalidad',
  templateUrl: './modalidad.component.html',
  styleUrls: ['./modalidad.component.css']
})
export class ModalidadComponent implements OnInit{

  mod:Modalidad[]=[];
  constructor(private api:ModalidadService) {
  }
  ngOnInit(): void {
    this.api.getListModalidad().subscribe(
      (Data:Modalidad[])=>{
        this.mod=Data;
      }
    )
  }

}

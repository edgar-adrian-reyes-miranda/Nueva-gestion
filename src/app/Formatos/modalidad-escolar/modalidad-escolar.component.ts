import {Component, OnInit} from '@angular/core';
import {Modalidadescolares} from "../../Interfaces/modalidadescolares";
import {ModalidadescolarService} from "../../Apis/modalidadescolar.service";

@Component({
  selector: 'app-modalidad-escolar',
  templateUrl: './modalidad-escolar.component.html',
  styleUrls: ['./modalidad-escolar.component.css']
})
export class ModalidadEscolarComponent implements  OnInit{
  escolar:Modalidadescolares[]=[];
  constructor(private api:ModalidadescolarService) {
  }
  ngOnInit(): void {
    this.api.getListEscolar().subscribe(
      (Data:Modalidadescolares[])=>{
        this.escolar=Data;
      }
    )
  }

}

import {Component, OnInit} from '@angular/core';
import {Universidades} from "../../Interfaces/universidades";
import {UniversidadesService} from "../../Apis/universidades.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bajas',
  templateUrl: './bajas.component.html',
  styleUrls: ['./bajas.component.css']
})
export class BajasComponent implements OnInit{

  universidades : Universidades[]=[];

  constructor(private api:UniversidadesService, private route:Router,
              private actived:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.cargarunis();
  }


  private cargarunis(){
    this.api.getListUniversidadBaja().subscribe(
      (Data:Universidades[])=>{
        this.universidades = Data;
      },
      (error)=>{
        console.error('Error en cargar', error);
      }
    );
  }
  //tabla
  private actualizarlista(){
    this.api.getListUniversidadBaja().subscribe(
      (Data:Universidades[])=>{
        this.universidades = Data;
      }
    )
  }

}

import {Component, OnInit} from '@angular/core';
import {Horarios} from "../../Interfaces/horarios";
import {HorariosService} from "../../Apis/horarios.service";

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit{
  horas:Horarios[]=[];
  constructor(private api:HorariosService) {
  }

  ngOnInit(): void {
    this.api.getListHorario().subscribe(
      (data:Horarios[])=>{
        this.horas=data;
      }
    )
  }

}

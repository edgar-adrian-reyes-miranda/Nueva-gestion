import {Component, OnInit} from '@angular/core';
import {Turno} from "../../Interfaces/turno";
import {TurnoService} from "../../Apis/turno.service";

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.css']
})
export class TurnoComponent implements  OnInit{
  turno:Turno[]=[];

  constructor(private api:TurnoService) {
  }
  ngOnInit(): void {
    this.api.getListtunro().subscribe(
      (DATA:Turno[])=>{
        this.turno= DATA;
      }
    )
  }

}

import {Component, OnInit} from '@angular/core';
import {Periodo} from "../../Interfaces/periodo";
import {PeriodoService} from "../../Apis/periodo.service";

@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrls: ['./periodo.component.css']
})
export class PeriodoComponent implements OnInit{
  perido:Periodo[]=[];

  constructor(private api:PeriodoService) {
  }
  ngOnInit(): void {
    this.api.getListPeriodo().subscribe(
      (data:Periodo[])=>{
        this.perido=data;
      }
    )
  }

}

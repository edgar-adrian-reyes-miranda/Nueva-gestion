import {Component, OnInit} from '@angular/core';
import {Estatusinfotec} from "../../Interfaces/estatusinfotec";
import {EstatusinfotecService} from "../../Apis/estatusinfotec.service";

@Component({
  selector: 'app-estus-infotec',
  templateUrl: './estus-infotec.component.html',
  styleUrls: ['./estus-infotec.component.css']
})
export class EstusInfotecComponent implements  OnInit{
  infotec:Estatusinfotec []=[];

  constructor(private api:EstatusinfotecService) {
  }
  ngOnInit(): void {
    this.api.getList().subscribe(
      (Data:Estatusinfotec[])=>{
        this.infotec=Data;
      },
      error=> console.error('Error en al lista', error),
      ()=> console.log('Obtencion de lista complea')
    );
  }


}

import {Component, OnInit} from '@angular/core';
import {Tramite} from "../../Interfaces/tramite";
import {TramiteService} from "../../Apis/tramite.service";

@Component({
  selector: 'app-tramite',
  templateUrl: './tramite.component.html',
  styleUrls: ['./tramite.component.css']
})
export class TramiteComponent implements OnInit {
  tipo:Tramite[]=[];

  constructor(private api:TramiteService) {
  }
  ngOnInit(): void {
    this.api.getListTramite().subscribe(
      (Data:Tramite[])=>{
        this.tipo=Data;
      }
    )
  }

}

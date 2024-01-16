import {Component, OnInit} from '@angular/core';
import {Enlace} from "../../Interfaces/enlace";
import {EnlaceService} from "../../Apis/enlace.service";

@Component({
  selector: 'app-enlace',
  templateUrl: './enlace.component.html',
  styleUrls: ['./enlace.component.css']
})
export class EnlaceComponent implements  OnInit{
  enla:Enlace[]= [];
  constructor(private api:EnlaceService) {
  }
  ngOnInit(): void {
    this.api.getListEnlace().subscribe(
      (data:Enlace[])=>{
        this.enla=data;
      }
    )
  }

}

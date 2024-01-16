import {Component, OnInit} from '@angular/core';
import {Genero} from "../../Interfaces/genero";
import {GeneroService} from "../../Apis/genero.service";

@Component({
  selector: 'app-sexos',
  templateUrl: './sexos.component.html',
  styleUrls: ['./sexos.component.css']
})
export class SexosComponent implements  OnInit{

  genero:Genero[]=[];

  constructor(private api:GeneroService) {
  }
  ngOnInit(): void {
    this.api.getListGenero().subscribe(
      (data:Genero[])=>{

       this.genero= data;
      }

    )
  }



}

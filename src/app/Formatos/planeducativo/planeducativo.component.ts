import {Component, OnInit} from '@angular/core';
import {Planeducativo} from "../../Interfaces/planeducativo";
import {PlaneducativoService} from "../../Apis/planeducativo.service";

@Component({
  selector: 'app-planeducativo',
  templateUrl: './planeducativo.component.html',
  styleUrls: ['./planeducativo.component.css']
})
export class PlaneducativoComponent implements  OnInit{
  plan:Planeducativo[]=[];
  constructor(private api:PlaneducativoService) {
  }
  ngOnInit(): void {
    this.api.getListPlan().subscribe(
      (Data:Planeducativo[])=>{
        this.plan=Data;
      }
    )
  }

}

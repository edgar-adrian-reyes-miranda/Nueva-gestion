import {Component, OnInit} from '@angular/core';
import {TutorService} from "../../Apis/tutor.service";
import {Tutor} from "../../Interfaces/tutor";

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements  OnInit{
  tutor:Tutor[]=[];
  constructor(private api:TutorService) {
  }
  ngOnInit(): void {
    this.api.getListTutor().subscribe(
      (Data:Tutor[])=>{
        this.tutor= Data;
      }
    )
  }

}

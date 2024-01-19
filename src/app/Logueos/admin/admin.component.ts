import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements  OnInit{

  correo:string='';
  password:string='';

  constructor() {
  }
  ngOnInit(): void {
  }
  admin(){


  }
}

import {Component, OnInit} from '@angular/core';
import {AccesoService} from "../../Apis/acceso.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements  OnInit{

  correo:string='';
  password:string='';

  constructor(private adServ:AccesoService) {
  }
  ngOnInit(): void {
  }
  admin(){


  }
}

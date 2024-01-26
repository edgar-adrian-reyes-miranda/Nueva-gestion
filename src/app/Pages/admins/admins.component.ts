import {Component, OnInit} from '@angular/core';
import {AdminsService} from "../../Apis/admins.service";

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements  OnInit{
  admin:string | undefined;

  constructor(private api:AdminsService) {
  }
  ngOnInit(): void {
    this.admin= this.api.getUsername();
    console.log('Nombre de admin en el componente', this.admin);
  }

}

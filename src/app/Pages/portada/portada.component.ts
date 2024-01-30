import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements  OnInit{
  mostrar:boolean= true;
  ngOnInit(): void {
  }


}

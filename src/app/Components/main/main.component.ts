import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  menuItems:any = [{id: 1, name:"peliculas", icon:"collections", url:"films"},
                  {id: 2, name:"personajes", icon:"face", url:"people"},
                  {id: 3, name:"naves", icon:"near_me", url:"starships"},
                  {id: 4, name:"vehiculos", icon:"directions_car", url:"vehicles"},
                  {id: 5, name:"especies", icon:"adb", url:"species"},
                  {id: 6, name:"planetas", icon:"brightness_4", url:"planets"},
                ];

  constructor() { }

  ngOnInit() {
  }
}

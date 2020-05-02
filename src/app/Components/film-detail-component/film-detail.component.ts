import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilmService } from 'src/app/Shared/Services/films.service';
import { IFilm } from 'src/app/Shared/Models/IFilm';
import { PeopleService } from 'src/app/Shared/Services/people.service';
import { IPeople } from 'src/app/Shared/Models/IPeople';
import { IStarShip } from 'src/app/Shared/Models/IStarShip';
import { StarShipService } from 'src/app/Shared/Services/starships.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  @Output() returnToFilms = new EventEmitter<boolean>();;

  people:IPeople[];
  matchPeople:IPeople[] = [];

  starship:IStarShip[];
  matchStarship:IStarShip[] = [];

  constructor(private FilmService:FilmService, private PeopleService:PeopleService,
    private StarShipService:StarShipService ) { }

  @Input() film:IFilm

  ngOnInit() {
    this.getAllData();
  }

  returnFilms(){
    this.returnToFilms.emit(null);
  }

  getAllData(){
    this.PeopleService.getAll().subscribe(data => {
        data.map((item, index) => {
          this.film.characters.map((item2, intex2) =>{
            if(item.url == item2){
              this.matchPeople.push(item);
            }
          })
        })
    })

    this.StarShipService.getAll().subscribe(data => {
      data.map((itemS, index) => {
        this.film.starships.map((item2, intex2) =>{
          if(itemS.url == item2){
            this.matchStarship.push(itemS);
          }
        })
      })
  })
  }
}
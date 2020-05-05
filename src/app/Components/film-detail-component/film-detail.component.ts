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
  matchPeople:IPeople[] = [];
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
          this.film.characters.map((item, intex) =>{
            this.PeopleService.getItemByUrl(item).subscribe(data => {
              this.matchPeople.push(data);
            })
    })
        this.film.starships.map((item, intex) =>{
          this.StarShipService.getItemByUrl(item).subscribe(data => {
            this.matchStarship.push(data);
          })
  })
  }
}
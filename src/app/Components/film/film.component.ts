import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../Shared/Services/films.service';
import { IFilm } from 'src/app/Shared/Models/IFilm';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  constructor(private filmService:FilmService) { }

  films:IFilm[];
  selectedFilm = null;

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.filmService.getAll().subscribe(data => 
      {
        data.map(person => {
          this.films = data
      });
  })
  }
  setSelectedFilm(film:IFilm){
      this.selectedFilm = film;
  }

  returnFilms(returnToFilms:boolean){
    this.selectedFilm = returnToFilms;
  }
}
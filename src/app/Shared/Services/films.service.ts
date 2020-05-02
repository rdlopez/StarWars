import {Injectable} from '@angular/core';
import { IFilm } from '../Models/IFilm';
import { Observable, Subject, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()


export class FilmService {
    private configUrl = 'http://swapi.py4e.com/api/films/';
    constructor(private http:HttpClient) {
    }
    getAll():Observable<IFilm[]>{
        return this.http.get<IFilm[]>(this.configUrl)
         .pipe(
             map(data => data['results']),
            catchError(this.handleError<IFilm[]>('getFilms', []))
        )
    }

    getById(url:string):Observable<IFilm>{
        return this.http.get<IFilm>(url)
         .pipe(
             map(data => data['results'])
        )
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            return of(result as T);
        };
    }
}
import {Injectable} from '@angular/core';
import { IFilm } from '../Models/IFilm';
import { Observable, Subject, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { IStarShip } from '../Models/IStarShip';


@Injectable()


export class StarShipService {
    private configUrl = 'http://swapi.py4e.com/api/starships/';
    constructor(private http:HttpClient) {
    }
    getAll():Observable<IStarShip[]>{
        return this.http.get<IStarShip[]>(this.configUrl)
         .pipe(
             map(data => data['results']),
            catchError(this.handleError<IStarShip[]>('getStarships', []))
        )
    }

    getItemByUrl(url:string):Observable<IStarShip>{
        return this.http.get<IStarShip>(url)
        .pipe(
            map(data => data),
            catchError(this.handleError<IStarShip>('getStarship', null))
       )
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            return of(result as T);
        };
    }
}
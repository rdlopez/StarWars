import {Injectable} from '@angular/core';
import { IPeople } from '../Models/IPeople';
import { Observable, Subject, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()


export class PeopleService {

    private configUrl = 'http://swapi.py4e.com/api/people/';
    constructor(private http:HttpClient) {
    }
    
    getAll():Observable<IPeople[]>{
        return this.http.get<IPeople[]>(this.configUrl)
         .pipe(
             map(data => data['results']),
            catchError(this.handleError<IPeople[]>('getPeople', []))
        )
    }

    getItemByUrl(url:string):Observable<IPeople>{
        return this.http.get<IPeople>(url)
        .pipe(
            map(data => data),
            catchError(this.handleError<IPeople>('getPerson', null))
       )
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
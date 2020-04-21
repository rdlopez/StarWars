import {Injectable} from '@angular/core';
import { IFilm } from '../Models/IFilm';
import { Observable, Subject, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()


export class FilmService {

}
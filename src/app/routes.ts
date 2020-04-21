import { Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { PeopleComponent } from './Components/people/people.component';
import { FilmComponent } from './Components/film/film.component';
// import {ThirdPartyComponent} from './Components/ThirdParties/third-party/third-party.component'
// import {ProductsComponent} from './Components/Products/products/products.component'

export const appRoutes: Routes = [
     {
          path: 'principal',
          component: MainComponent
     },
     { path: 'films', component: FilmComponent },
     { path: 'people', component: PeopleComponent },
     { path: 'starships', component: MainComponent },
     { path: 'vehicles', component: MainComponent },
     { path: 'species', component: MainComponent },
     { path: 'planets', component: MainComponent },
     { path: '', redirectTo: '/principal', pathMatch: 'full' }
];
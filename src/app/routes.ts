import {Routes} from '@angular/router'
import {MainComponent} from './Components/main/main.component'
import { FilmsComponent } from './Components/films/films.component' 
// import {ThirdPartyComponent} from './Components/ThirdParties/third-party/third-party.component'
// import {ProductsComponent} from './Components/Products/products/products.component'

export const appRoutes:Routes = [
     {path: 'principal', component:MainComponent},
     {path: 'films', component:FilmsComponent},
    {path: 'people', component:MainComponent},
    {path: 'starships', component:MainComponent},
    {path: 'vehicles', component:MainComponent},
    {path: 'species', component:MainComponent},
    {path: 'planets', component:MainComponent},
     {path:'', redirectTo:'/principal', pathMatch:'full'}
];
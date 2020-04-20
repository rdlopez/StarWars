import {Routes} from '@angular/router'
import {MainComponent} from './Components/main/main.component'
// import { ProvidersComponent} from './Components/Providers/providers/providers.component' 
// import {ThirdPartyComponent} from './Components/ThirdParties/third-party/third-party.component'
// import {ProductsComponent} from './Components/Products/products/products.component'

export const appRoutes:Routes = [
     {path: 'principal', component:MainComponent},
    // {path: 'films', component:ThirdPartyComponent},
    // {path: 'people', component:ProductsComponent},
    // {path: 'starships', component:ProvidersComponent},
    // {path: 'vehiculos', component:ProvidersComponent},
    // {path: 'species', component:ProvidersComponent},
    // {path: 'planets', component:ProvidersComponent},
     {path:'', redirectTo:'/principal', pathMatch:'full'}
];
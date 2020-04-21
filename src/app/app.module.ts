import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {appRoutes} from './routes';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainComponent } from './Components/main/main.component';
import { RouterModule } from '@angular/router';
import { PeopleComponent } from './Components/people/people.component';
import { MainItemComponent } from './Components/main-item/main-item.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleService } from './Shared/Services/people.service';
import { FilmService } from './Shared/Services/films.service';
import { FilmComponent } from './Components/film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    PeopleComponent,
    MainItemComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [PeopleService,FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }

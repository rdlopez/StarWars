import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/Shared/Services/people.service';
import { IPeople } from 'src/app/Shared/Models/IPeople';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people:IPeople[] = [];

  constructor(private PeopleService:PeopleService) {

   }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.PeopleService.getAll().subscribe(data => 
      {
        data.map(person => {
          if(person.gender.toLocaleLowerCase() == 'male'){
            person.gender = "Masculino";
          }else if(person.gender.toLocaleLowerCase() == 'female'){
            person.gender = "Femenino";
          }
          });
          this.people = data
      }
      );
  }
}

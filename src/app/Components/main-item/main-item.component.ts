import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-item',
  templateUrl: './main-item.component.html',
  styleUrls: ['./main-item.component.css']
})
export class MainItemComponent implements OnInit {

  @Input() item:any

  constructor() { }

  ngOnInit() {
  }
}

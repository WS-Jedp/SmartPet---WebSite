import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-sm-card',
  templateUrl: './date-sm-card.component.html',
  styleUrls: ['./date-sm-card.component.css']
})
export class DateSmCardComponent implements OnInit {

  @Input() statePet:string = 'waiting';

  constructor() { }

  ngOnInit() {
  }

}

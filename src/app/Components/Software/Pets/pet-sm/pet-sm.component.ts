import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pet-sm',
  templateUrl: './pet-sm.component.html',
  styleUrls: ['./pet-sm.component.css']
})
export class PetSmComponent implements OnInit {

  @Input() homeView:boolean;

  constructor() {
  }

  ngOnInit() {
  }

}

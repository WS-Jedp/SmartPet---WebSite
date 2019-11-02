import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent implements OnInit {

  @Input() title:string = 'Titulo h3';
  @Input() text:string = 'Text of the card';

  constructor() { }

  ngOnInit() {
  }

}

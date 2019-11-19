import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent implements OnInit {

  @Input() title:string = 'Titulo h3';
  @Input() text:string = 'Text of the card';

  @Input() fullText:string;
  @Input() typeSubscription:string;

  @Output() actionCardPrice:EventEmitter<object> = new EventEmitter();

  dataCardPrice:object;

  constructor() { }

  ngOnInit() {
  }

  pressCardPrice(){
    this.dataCardPrice = {
      title: 'Formulario Compra',
      form: true,
      text: this.fullText,
      subscription: this.title
    }
    this.actionCardPrice.emit(this.dataCardPrice);
  }

}

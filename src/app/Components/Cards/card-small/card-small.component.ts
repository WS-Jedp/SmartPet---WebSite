import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-small',
  templateUrl: './card-small.component.html',
  styleUrls: ['./card-small.component.css']
})
export class CardSmallComponent implements OnInit {

  @Input() title:string = 'Titulo h1';
  @Input() img:string = 'AtencionUnica.png';
  @Input() fullText:string;

  @Output() actionCardSm:EventEmitter<object> = new EventEmitter();

  dataCardSm:object;

  constructor() { }

  ngOnInit() {
  }

  // Functions
  pressCardSm(){
    this.dataCardSm = {
      title: this.title,
      text: this.fullText,
      img: this.img
    }
  this.actionCardSm.emit(this.dataCardSm);
  }

}

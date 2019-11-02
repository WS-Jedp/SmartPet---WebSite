import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-large',
  templateUrl: './card-large.component.html',
  styleUrls: ['./card-large.component.css']
})
export class CardLargeComponent implements OnInit {

  @Input() title:string = 'Servicios Personalizados';
  @Input() img:string = 'ServicioPersonal.png';
  @Input() text:string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, vel, reiciendis. Quas voluptatibus in, ea saepe quo?.';

  @Input() fullTextCard:string = 'some';
  @Output() actionCard:EventEmitter<object> = new EventEmitter();

  dataCardBox:object;

  constructor() { }

  ngOnInit() {
  }

  // Functions
  pressCard(){
    this.dataCardBox = {
      title: this.title,
      text: this.fullTextCard,
      img: this.img,
    }
    this.actionCard.emit(this.dataCardBox);
  }

}

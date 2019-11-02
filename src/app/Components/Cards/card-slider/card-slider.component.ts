import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {

  @Input() title:string = 'Titulo H1';
  @Input() img:string = 'SmartWork.png'
  @Input() text:string = 'Text example';
  @Input() contact:boolean = false;

  @Output() actionCardSlider:EventEmitter<object> = new EventEmitter();
  dataCardSlider:object;

  constructor() { }

  ngOnInit() {
  }

  // Functions
  pressCardSlider(){
    this.dataCardSlider = {
      title: this.title,
      text: this.text,
      img: this.img,
      contact: this.contact
    }
    this.actionCardSlider.emit(this.dataCardSlider);
  }

}

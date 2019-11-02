import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Interfaces
import {DataLightbox} from '../../Interfaces/Lightbox/data-lightbox';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {

  @Input() data:DataLightbox;
  @Output() closeBox:EventEmitter<boolean> = new EventEmitter();

  isForm:boolean;

  title:string;
  text:string;
  img:string;

  constructor() {

  }

  ngOnInit() {
    this.isForm = this.data.form;
    console.log(this.isForm)

    this.title = this.data.title;
    this.text = this.data.text;
    this.img = this.data.img;
  }


  // Functions
  closeLightbox(){
    this.closeBox.emit(true)
  }
}

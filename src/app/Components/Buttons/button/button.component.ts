import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() title:string = 'Call To Action';
  @Input() color:string = 'Blue';

  // What action
  @Input() type:string = 'type';

  @Input() isForm:boolean = false;
  @Input() titleBox:string = 'Titulo H1';
  @Input() textBox:string = 'Description';
  @Input() imgBox:string;


  @Output() action:EventEmitter<object> = new EventEmitter();

  info:object;

  constructor() {

  }

  ngOnInit() {

  }

  pressButton(){
    this.info = {
      form: this.isForm,
      title: this.titleBox,
      text: this.textBox,
      img: this.imgBox
    }
    this.action.emit(this.info)
  }

}

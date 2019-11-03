import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  @Output() closeMenu:EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // Functions
  close(){
    this.closeMenu.emit(true)
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {

  dataType:boolean = null;
  title:string;
  text:string;
  img:string;

  constructor() { }

  ngOnInit() {
  }

}

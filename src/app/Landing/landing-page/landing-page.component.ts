import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
declare var Swiper: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements AfterViewInit {

  constructor(private elementRef:ElementRef) { }

  ngAfterViewInit(){
    this.swiper = new Swiper(this.elementRef.nativeElement.querySelector('.swiper-container'),{
      direction: 'horizontal',
      slidesPerView: 2
    });
  }
}

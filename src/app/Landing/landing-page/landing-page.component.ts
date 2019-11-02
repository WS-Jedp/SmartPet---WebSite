import { Component, OnInit, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
declare var Swiper: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements AfterViewInit {

  swiper:any;

  // Show Lightbox
  lightBox:boolean;
  dataLightbox:any;

  constructor(private elementRef:ElementRef) {
    this.lightBox = false;
  }

  ngAfterViewInit(){
    this.swiper = new Swiper(this.elementRef.nativeElement.querySelector('.swiper-container'),{
      direction: 'horizontal',
      slidesPerView: 2
    });
  }


// ----------- LightBox -------------
// Button
showLightbox(event:object){
  this.dataLightbox = event;
  this.lightBox = true;
}


// LightBox for Cards
  // CardLg
showLightboxCardLg(data:object){
  this.dataLightbox = data;
  this.lightBox = true;
}

  // Card Sm
showLightboxCardSm(data:object){
  this.dataLightbox = data;
  this.lightBox = true;
}

 // Card Price
showLightboxCardPrice(data){
    this.dataLightbox = data;
    this.lightBox = true;
    console.log(data)
}


  // Card Slider
showLightboxCardSlider(data){
  this.dataLightbox = data;
  this.lightBox = true;
}

// ----------- Close lightbox
closeBox(event){
  if(event){
    this.lightBox = false;
  }else{
    this.lightBox = true;
  }
}
}

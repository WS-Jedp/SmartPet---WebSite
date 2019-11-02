import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Conections
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

// Router
import {AppRoutingModule} from '../app-routing.module';
import { LandingPageComponent } from './Landing/landing-page/landing-page.component';
import { AtomicDesignComponent } from './AtomicDesign/atomic-design/atomic-design.component';
import { FooterLandingPageComponent } from './Landing/footer-landing-page/footer-landing-page.component';
import { LightboxComponent } from './Components/lightbox/lightbox.component';
import { CardLargeComponent } from './Components/Cards/card-large/card-large.component';
import { CardSmallComponent } from './Components/Cards/card-small/card-small.component';
import { CardPriceComponent } from './Components/Cards/card-price/card-price.component';
import { CardSliderComponent } from './Components/Cards/card-slider/card-slider.component';
import { ButtonComponent } from './Components/Buttons/button/button.component';
import { ThanksPageComponent } from './Landing/thanks-page/thanks-page.component';
import { LoginPageComponent } from './Landing/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AtomicDesignComponent,
    FooterLandingPageComponent,
    LightboxComponent,
    CardLargeComponent,
    CardSmallComponent,
    CardPriceComponent,
    CardSliderComponent,
    ButtonComponent,
    ThanksPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { MenuComponent } from './Landing/menu/menu.component';
import { SmartPetHomeComponent } from './Software/smart-pet-home/smart-pet-home.component';
import { SmartPetStartComponent } from './Software/smart-pet-start/smart-pet-start.component';
import { SmartPetPetsComponent } from './Software/smart-pet-pets/smart-pet-pets.component';
import { PetSmComponent } from './Components/Software/Pets/pet-sm/pet-sm.component';
import { DateSmCardComponent } from './Components/Software/Dates/date-sm-card/date-sm-card.component';
import { SmartPetProfileComponent } from './Software/smart-pet-profile/smart-pet-profile.component';

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
    LoginPageComponent,
    MenuComponent,
    SmartPetHomeComponent,
    SmartPetStartComponent,
    SmartPetPetsComponent,
    PetSmComponent,
    DateSmCardComponent,
    SmartPetProfileComponent
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

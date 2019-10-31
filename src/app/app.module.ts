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

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AtomicDesignComponent,
    FooterLandingPageComponent
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

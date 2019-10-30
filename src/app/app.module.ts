import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Conections
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

// Router
import {AppRoutingModule} from '../app-routing.module';
import { LandingPageComponent } from './Landing/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

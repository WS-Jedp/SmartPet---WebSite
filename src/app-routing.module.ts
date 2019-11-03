import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components
import {AtomicDesignComponent} from './app/AtomicDesign/atomic-design/atomic-design.component';
import {LandingPageComponent} from './app/Landing/landing-page/landing-page.component';
import {ThanksPageComponent} from './app/Landing/thanks-page/thanks-page.component';
import {LoginPageComponent} from './app/Landing/login-page/login-page.component';

// Software Components
import {SmartPetHomeComponent} from './app/Software/smart-pet-home/smart-pet-home.component';
import {SmartPetStartComponent} from './app/Software/smart-pet-start/smart-pet-start.component';
import {SmartPetPetsComponent} from './app/Software/smart-pet-pets/smart-pet-pets.component';


const routes:Routes = [
  {path:'Welcome', component: LandingPageComponent},
  {path:'AtomicDesign',component:AtomicDesignComponent},
  {path:'Thanks', component:ThanksPageComponent},
  {path:'Login', component: LoginPageComponent},
  {path: 'Home', component: SmartPetHomeComponent, children:[
    {path: '', component: SmartPetStartComponent},
    {path: 'Pets', component: SmartPetPetsComponent},
    {path: '**', component: SmartPetStartComponent}
  ]},
  {path:'', redirectTo: '/Welcome', pathMatch: 'full'},
  {path: '**', component:LandingPageComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

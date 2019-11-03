import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components
import {AtomicDesignComponent} from './app/AtomicDesign/atomic-design/atomic-design.component';
import {LandingPageComponent} from './app/Landing/landing-page/landing-page.component';
import {ThanksPageComponent} from './app/Landing/thanks-page/thanks-page.component';
import {LoginPageComponent} from './app/Landing/login-page/login-page.component';


const routes:Routes = [
  {path:'Welcome', component: LandingPageComponent},
  {path:'AtomicDesign',component:AtomicDesignComponent},
  {path:'Thanks', component:ThanksPageComponent},
  {path:'Login', component: LoginPageComponent},
  {path:'', redirectTo: '/Welcome', pathMatch: 'full'},
  {path: '**', component:LandingPageComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

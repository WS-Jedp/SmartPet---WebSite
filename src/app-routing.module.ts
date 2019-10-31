import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components
import {AtomicDesignComponent} from './app/AtomicDesign/atomic-design/atomic-design.component';
import {LandingPageComponent} from './app/Landing/landing-page/landing-page.component';


const routes:Routes = [
  {path:'Welcome', component: LandingPageComponent},
  {path:'AtomicDesign',component:AtomicDesignComponent},
  {path:'', redirectTo: '/Welcome', pathMatch: 'full'},
  {path: '**', component:LandingPageComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

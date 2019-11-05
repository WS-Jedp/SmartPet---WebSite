import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smartPet-LandingPage';

  landing:boolean;

  constructor(private router:Router){
    this.landing = true;
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd)=>{
      console.log('rutas==>', event.url);

      if(event.url != '/Welcome'){
        this.landing = false;
      }else{
        this.landing = true;
      }
    });

  }

}

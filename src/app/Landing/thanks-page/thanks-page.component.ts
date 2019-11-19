import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

// Services
import {UserService} from '../../Services/User/user.service';

// Interfaces
import {UserInterface} from '../../Interfaces/Api/User/user-interface';

@Component({
  selector: 'app-thanks-page',
  templateUrl: './thanks-page.component.html',
  styleUrls: ['./thanks-page.component.css']
})
export class ThanksPageComponent implements OnInit {

  nameClient:string;
  isLoading:boolean;

  constructor(private userService:UserService, private router:Router) {
    this.isLoading = true;

    this.userService.validateClient().subscribe((resp:any)=>{
      if(resp.status == 200){
        this.nameClient = resp.user.name;
        this.nameClient.toUpperCase();
        this.isLoading = false;
      }else{
        this.router.navigate(['Welcome']);
      }
    })


  }

  ngOnInit() {
  }

}

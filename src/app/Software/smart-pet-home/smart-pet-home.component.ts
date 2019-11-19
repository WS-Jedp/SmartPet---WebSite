import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

// Services
import {UserService} from '../../Services/User/user.service';

// Interfaces
import {UserInterface} from '../../Interfaces/Api/User/user-interface';

@Component({
  selector: 'app-smart-pet-home',
  templateUrl: './smart-pet-home.component.html',
  styleUrls: ['./smart-pet-home.component.css']
})
export class SmartPetHomeComponent implements OnInit {

  clientInfo:object;

  isLoading:boolean;

  constructor(private userService:UserService, private router:Router) {
    this.isLoading = true;
    if(!localStorage.getItem('token')){
      this.router.navigate(['Login']);
    }
    this.userService.validateClient().subscribe((resp:any)=>{
      if(resp.status != 200){
          this.router.navigate(['Login']);
      }else{
        this.isLoading = false;
        this.clientInfo = resp.user;
      }
    })
  }

  ngOnInit() {
  }

  logout(){
    this.userService.logoutClient().subscribe((resp:UserInterface)=>{
      if(resp.status != 200){
        console.log(resp);
        location.reload();
      }else{
        localStorage.removeItem('token');
        this.router.navigate(['Login']);
        console.log(resp)
      }
    })
  }

}

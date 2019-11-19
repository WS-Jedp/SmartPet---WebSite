import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

// Services
import {UserService} from '../../Services/User/user.service';

//Interfaces
import {UserInterface} from '../../Interfaces/Api/User/user-interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }

  loginClient(data:NgForm){
    this.userService.loginUser(data.value).subscribe((resp:UserInterface)=>{
      if(resp.status != 200){
        console.log(resp)
      }else{
        localStorage.setItem('token', 'Bearer' + resp.token);
        this.router.navigate(['Home']);
      }
    })
  }
}

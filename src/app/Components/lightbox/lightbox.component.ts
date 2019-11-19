import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Register
import {NgForm} from '@angular/forms';

// Route
import {Router} from '@angular/router';

// Interfaces
import {DataLightbox} from '../../Interfaces/Lightbox/data-lightbox';
import {Subscriptions} from '../../Interfaces/Api/Subscriptions/subscriptions';
import {UserInterface} from '../../Interfaces/Api/User/user-interface';

// Services
import {SubscriptionsService} from '../../Services/Subscriptions/subscriptions.service';
import {UserService} from '../../Services/User/user.service';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {

  @Input() data:DataLightbox;
  @Output() closeBox:EventEmitter<boolean> = new EventEmitter();

  isForm:boolean;

  typeSubscription:string;
  title:string;
  text:string;
  img:string;

  // Api info
  subscriptions:any[];

  constructor(private subscriptionsService:SubscriptionsService, private userService:UserService, private router:Router) {

    // ----------- Get all api info
      // ------- Get subscriptions
      this.subscriptionsService.getSubscriptions().subscribe((resp:Subscriptions)=>{
        this.subscriptions = resp.subscriptions;
        console.log(resp.subscriptions[0].id_subscription)
      });
  }

  ngOnInit() {
    this.isForm = this.data.form;
    console.log(this.isForm)

    this.title = this.data.title;
    this.text = this.data.text;
    this.img = this.data.img;
    this.typeSubscription = this.data.typeSubscription;
  }


  // Functions
  closeLightbox(){
    this.closeBox.emit(true)
  }

// ------------------- forms -----------------
  // Register client
  registerUser(data:NgForm){
    console.log(data.value);
    this.userService.registerUser(data.value).subscribe((resp:UserInterface)=>{
      console.log(resp);
      this.userService.loginUser(data.value).subscribe((resp:UserInterface)=>{
        console.log(resp.token);
        localStorage.setItem('token', 'Bearer ' + resp.token)
      })
      this.router.navigate(['Thanks']);
    });
  }


}

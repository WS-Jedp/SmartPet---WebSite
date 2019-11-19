import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

// Interfaces
import {UserInterface} from '../../Interfaces/Api/User/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = 'http://127.0.0.1:8000/api/client/';
  headers = null;

  constructor(private http:HttpClient) {}

// Register client
  registerUser(data){
    return this.http.post(
      this.url + 'register',
      data,
      {
        headers: this.headers = new HttpHeaders({
          'Authorization': '',
          'Content-Type': 'aplication/json'
        })
      }
    )};

// Login Uesr
  loginUser(data){
    return this.http.post(
      this.url + 'login',
      data,
      {
        headers: this.headers = new HttpHeaders({
          'Authorization': '',
          'Content-Type': 'aplication/json'
        })
      })
  }

  // Validate user
  validateClient(){
    return this.http.get(
      this.url + 'validate',
      {
        headers: this.headers = new HttpHeaders({
          'Authorization': localStorage.getItem('token'),
        })
      })
  }

  // Logout client
  logoutClient(){
    return this.http.get(
      this.url + 'logout',
      {
        headers: this.headers = new HttpHeaders({
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'aplication/json'
        })
      })
  }




}

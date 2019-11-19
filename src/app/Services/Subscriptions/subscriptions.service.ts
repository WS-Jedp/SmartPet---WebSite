import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  url:string = 'http://127.0.0.1:8000/api/';
  headers = null;

  constructor(private http:HttpClient) { }

  getSubscriptions(){
    return this.http.get(
      this.url + 'subscriptions',
    )
  }
}

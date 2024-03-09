import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable ,BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData=new BehaviorSubject(null);
  Data:any;
  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if(localStorage.getItem('userToken')!== null){
      this.decodeUserData()
    }
  }
  decodeUserData(){
    let ecodedToken = JSON.stringify( localStorage.getItem('userToken'));
    let decodedToken:any=jwtDecode(ecodedToken)
    this.userData.next(decodedToken);
    this.Data=this.userData.getValue();
  }
  logOut(){
    localStorage.removeItem('userToken')
    this.userData.next(null);
    this._Router.navigate(['/login'])
  }
  
    register(userData:object):Observable<any>{
return this._HttpClient.post('http://localhost:5000/user/SingnUp',userData)
    }
    login(userData:object):Observable<any>{
      return this._HttpClient.post('http://localhost:5000/user/signIn',userData)
          }
   }


import { Component } from '@angular/core';
import {FormGroup , FormControl , Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private _AuthService:AuthService,private _Router:Router){
  }
  isLoading:boolean=false;
  apiError=''
loginForm:FormGroup =new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[a-z0-9]{5,10}$/)]),
})
handleLogin(loginForm:FormGroup){
  this.isLoading=true;
if (loginForm.valid)
{
this._AuthService.login(loginForm.value).subscribe({
  next:(response)=> {
    console.log(response);
    
  if(response.message ==="success")
{
  localStorage.setItem('userToken',response.Token)
  this._AuthService.decodeUserData();
//login
this.isLoading=false;
console.log(this._AuthService.Data.role);
this._Router.navigate(['/home'])



}},
  error:(err)=>{
    this.isLoading=false;
    this.apiError=err.error.errors;
  }
   
  
  
})
}
console.log(loginForm.value);

}

}

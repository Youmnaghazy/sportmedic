import { Component } from '@angular/core';
import {FormGroup , FormControl , Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor (private _AuthService:AuthService,private _Router:Router){
  }
  isLoading:boolean=false;
  apiError=''
registerForm:FormGroup =new FormGroup({
  FristName:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  lastName:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  age:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{0,3}$/)]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
  repeat_password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
 
})
handleRegister(registerForm:FormGroup){
  this.isLoading=true;
if (registerForm.valid)
{
this._AuthService.register(registerForm.value).subscribe({
  next:(response)=> {
    console.log(response);
    
  if(response.message ==="success")
{
//login
this.isLoading=false;
this._Router.navigate(['/login'])
}},
  error:(err)=>{
    this.isLoading=false;
    this.apiError=err.error.errors;
  }
   
  
  
})
}
console.log(registerForm.value);

}
}

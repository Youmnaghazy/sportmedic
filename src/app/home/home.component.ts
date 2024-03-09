import { Component,OnInit } from '@angular/core';
import {HttpClientModule}from '@angular/common/http'
import { AllapiService } from '../allapi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private _AllapiService:AllapiService){
}
userData:any;
ngOnInit(){
  this._AllapiService.postname(this.userData).subscribe((data)=>{
    this.userData=data;
  })
}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllapiService {
  private _HttpClient: any;

  constructor(private http:HttpClient) { }
  postname(userData:object):Observable<any>{
    return this._HttpClient.post('http://localhost:5000/user/SingnUp',userData)
        }

}

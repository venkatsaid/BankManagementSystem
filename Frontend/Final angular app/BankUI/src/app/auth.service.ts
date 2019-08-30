import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {ILogin} from './login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor() { 
    
  }
  
  logout() :void {    
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token');    
    }  
}

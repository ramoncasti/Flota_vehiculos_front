import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/auth/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = "http:/localhost:3000/Login";
  
  constructor(private router:Router,private httpClient:HttpClient) { 

  }

  login(user: User){
    return this.httpClient.post(this.api, user);
  }

  userLogged(): Boolean{
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    window.location.reload();
    this.router.navigate(['/login']);
  }

}
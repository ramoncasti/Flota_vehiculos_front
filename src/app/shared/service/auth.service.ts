import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/auth/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = "http://localhost:3000/login";
  
  constructor(private router:Router,private httpClient:HttpClient) { 

  }

  async login(user: User){
    return await this.httpClient.post(this.api, user).toPromise().then(result => this.storage(result));
  }

  storage(result:any){
    localStorage.setItem('token',result.token);
    this.router.navigate(['/']);
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
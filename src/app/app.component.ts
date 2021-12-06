import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from './shared/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  items: MenuItem[]=[];

  displayMenu:boolean = false;

  constructor(private authService:AuthService,private router:Router) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'fas fa-home',
        routerLink:['/']
      },
  ];
  }

  isLogged(){
    return this.authService.userLogged();
  }

  salir(){
    this.displayMenu=false;
    this.authService.logout();
  }

}

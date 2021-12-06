
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { User } from '../user.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User();

  displayRegistro:boolean = false;

  constructor(private authService:AuthService,private messageService: MessageService,private router:Router) {
    
  }

  ngOnInit(): void {
    this.isLogged();
    document.getElementById('inputUsername')?.focus();
  }


  login(){
    this.authService.login(this.user)
    .catch(error => {
      this.messageService.add({severity:'error', summary:'Error', detail:'Usuario o Contraseña incorrectos'});
    })
  }

getValue(event:any){
  return event.target.value;
}

focusPassword(){
  document.getElementById('inputPassword')?.focus();
}

focusBtnEnter(){
  document.getElementById('btnEnter')?.focus();
}

isLogged(){
  if(this.authService.userLogged()){
    this.router.navigate(['/']);
  }
    
  
}
}

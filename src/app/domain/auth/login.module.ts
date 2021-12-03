import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { AuthService } from 'src/app/shared/service/auth.service';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {PasswordModule} from 'primeng/password';




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    PasswordModule
  ],
  providers: [
    AuthService,
    MessageService
  ]
})
export class LoginModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { TableModule } from 'primeng/table';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Dialog, DialogModule } from 'primeng/dialog';
import { UsuarioService } from './usuario.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import {PasswordModule} from 'primeng/password';
import {ToastModule} from 'primeng/toast';



@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuarioEditComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    UsuarioRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    CheckboxModule,
    DropdownModule,
    InputNumberModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    ToastModule
  ],
  providers: [
    UsuarioService,
    ConfirmationService,
    Dialog,
    MessageService
  ]
})
export class UsuarioModule { }

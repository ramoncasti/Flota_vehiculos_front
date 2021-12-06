import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  isModoEdicion: boolean = false;

  ruta = "/usuario";

  display: boolean = false;

  psw1: string="";
  psw2: string="";

  isUsuarioLoggueado: boolean = false;

  usuario: Usuario = new Usuario();

  titulo: string="";

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario() {
    this.activatedRoute.paramMap
      .subscribe(
        (paramMap) => {
          const username = paramMap.get('username');
          if (username) {
            this.isModoEdicion = true;
            this.titulo = "Editar Usuario";
            this.usuarioService.getUsuarioById(username)
              .subscribe(
                (usuario) => {
                  this.usuario = usuario;
                  this.verificarUsuario(usuario);
                },
                (error) => {
                  console.log("error al cargar " + error);
                }
              )
          } else {
            this.titulo = "Crear Usuario";
          }

        }
      )
  }


  updateUsuario() {
    if (this.isUsuarioLoggueado) {
      this.verificarSenha();
    } else {
      this.guardar();
    }
  }

  guardar() {
    this.usuarioService.updateUsuario(this.usuario)
      .subscribe(
        () => {
          this.returnToList();
        },
        (erro) => {
          console.error("Eror al actualizar " + erro);
        }
      )
  }

  guardarPerfil() {
    this.usuarioService.updatePerfil(this.usuario)
      .subscribe(
        () => {
          this.returnToList();
        },
        (erro) => {
          console.error("Eror al actualizar " + erro);
        }
      )
  }

   addUsuario() {
    let existe =  this.usernameExiste(this.usuario.login)
    if (!existe ) {
      //Define la constraseña por defecto al registrar nuevo usuario
       console.log('entra')
    } else {
      console.log('no entra')
      this.messageService.add({ severity: 'warn', summary: 'Usuario', detail: 'Username de usuario ya registrado' });
    }
  }

  returnToList() {
    this.router.navigate([this.ruta]);
  }

  verificarSenha() {
    /* VERIFICA SI NO SON NULOS */
    if (this.psw1 || this.psw2) {
      /* VERIFICA SI SON IGUALES */
      if (this.psw1 === this.psw2) {
        /* Asigna la nueva contraseña*/
        this.usuario.Contrasenia = this.psw1;
        this.guardarPerfil();
      } else {
        this.display = true;
      }
    } else {
      this.guardar();
    }
  }










  verificarUsuario(usuario: Usuario) {
    let login = localStorage.getItem('usuario');
    if (login === this.usuario.login) {
      this.isUsuarioLoggueado = true;
    }
  }

   usernameExiste(login: string) {
     this.usuarioService.getUsuarioById(login)
      .subscribe(
        (f) => {
          console.log(f)
          return true;
        },
        err =>{
          return false;
        }
      )
      return false;
  }
}

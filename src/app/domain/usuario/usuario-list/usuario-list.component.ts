import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios: Usuario[] = [];

  titulo = "Listado de Usuarios";

  ruta = "/usuario";

  display: boolean = false;

  loading: boolean = true;

  constructor(
    private service: UsuarioService
  ) { }

  ngOnInit(): void {
    this.getUsuarios();
    this.loading = false;
  }

  getUsuarios() {
    this.service.getUsuarios()
      .subscribe(
        (usuarios) => {
          this.usuarios = usuarios;
          console.log(this.usuarios);
        },
        (err) => {
          console.error(err);
        }
      )
  }

}

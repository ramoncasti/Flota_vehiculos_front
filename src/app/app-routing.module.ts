import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './domain/auth/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./domain/auth/login.module').then(l => l.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./domain/home/home.module').then(h => h.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./domain/home/home.module').then(h => h.HomeModule),
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

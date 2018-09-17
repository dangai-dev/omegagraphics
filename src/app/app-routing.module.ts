import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginModalComponent } from './components/header/login-modal/login-modal.component';
import { FormLoginComponent } from './components/header/login-modal/form-login/form-login.component';
import { FormCadastroComponent } from './components/header/login-modal/form-cadastro/form-cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginModalComponent },
  { path: 'entrar', component: FormLoginComponent, outlet: 'loginModal' },
  { path: 'cadastro', component: FormCadastroComponent, outlet: 'loginModal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

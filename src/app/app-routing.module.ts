import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { ProductComponent } from './modules/product/product.component';
import { LoginModalComponent } from './modules/header/login-modal/login-modal.component';
import { FormLoginComponent } from './modules/header/login-modal/form-login/form-login.component';
import { FormCadastroComponent } from './modules/header/login-modal/form-cadastro/form-cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { state: 'home' } },
  { path: 'product-page', component: ProductComponent, data: { state: 'product-page' } },
  { path: 'login', component: LoginModalComponent },
  { path: 'entrar', component: FormLoginComponent, outlet: 'loginModal' },
  { path: 'cadastro', component: FormCadastroComponent, outlet: 'loginModal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

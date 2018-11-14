import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginModalComponent } from './login-modal/login-modal.component';
import { FormLoginComponent } from './login-modal/form-login/form-login.component';
import { FormCadastroComponent } from './login-modal/form-cadastro/form-cadastro.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ModalComponent } from 'src/app/layout/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    LoginModalComponent,
    FormLoginComponent,
    FormCadastroComponent,
    ModalComponent,
  ],
  exports: [
    LoginModalComponent,
    FormLoginComponent,
    FormCadastroComponent
  ],
  entryComponents: [
    LoginModalComponent
  ]
})
export class HeaderModule { }

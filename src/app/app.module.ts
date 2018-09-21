import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './material/app-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCardComponent } from './components/product/product-card/product-card.component';
import { ModalComponent } from './layout/modal/modal.component';
import { LoginModalComponent } from './components/header/login-modal/login-modal.component';
import { FormLoginComponent } from './components/header/login-modal/form-login/form-login.component';
import { FormCadastroComponent } from './components/header/login-modal/form-cadastro/form-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ProductCardComponent,
    ModalComponent,
    LoginModalComponent,
    FormLoginComponent,
    FormCadastroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  entryComponents: [
    LoginModalComponent
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }

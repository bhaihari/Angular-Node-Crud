import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MiddleComponent } from './middle/middle.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './middle/home/home.component';
import { AddProductComponent } from './middle/add-product/add-product.component';
import { EditProductComponent } from './middle/edit-product/edit-product.component';

import {RouterModule, Routes} from '@angular/router';
import { EmailComponent } from './middle/email/email.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DeleteProductComponent } from './middle/delete-product/delete-product.component';
import { ListProductComponent } from './middle/list-product/list-product.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiddleComponent,
    FooterComponent,
    HomeComponent,
    AddProductComponent,
    EditProductComponent,
    EmailComponent,
    DeleteProductComponent,
    ListProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

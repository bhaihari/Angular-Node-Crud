import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app/header/header.component';
import { MiddleComponent } from './app/middle/middle.component';
import { FooterComponent } from './app/footer/footer.component';
import { HomeComponent } from './app/middle/home/home.component';
import { AddProductComponent } from './app/middle/add-product/add-product.component';
import { EditProductComponent } from './app/middle/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiddleComponent,
    FooterComponent,
    HomeComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import {ProductService} from 'C:/Users/hari.dubey/Desktop/node_Projects/project2/src/app/product.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})


export class EditProductComponent implements OnInit {
  name=""
  amount=""
  id=""

  books=[]

  constructor(private productservice: ProductService) { }
  ngOnInit() {
  }

  edit(){
    this.productservice.editproduct(this.id,this.name,this.amount)
  }

}

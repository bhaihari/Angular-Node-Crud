import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import {ProductService} from 'C:/Users/hari.dubey/Desktop/node_Projects/project2/src/app/product.service';
@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  name=""
  amount=""
  id=""

  books=[];

  constructor(private productservice: ProductService) { }

  ngOnInit() {
  }

  delete(){
    this.productservice.deleteproduct(this.id,this.name,this.amount);
  }

}

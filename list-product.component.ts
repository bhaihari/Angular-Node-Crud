import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import {ProductService} from 'C:/Users/hari.dubey/Desktop/node_Projects/project2/src/app/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  name=""
  amount=""
  id=""

  books=[];

  constructor(private productservice: ProductService) { }

  ngOnInit() {
  }

  list(){
    this.productservice.listproduct(this.id,this.name,this.amount)
  }
}

import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import {ProductService} from 'C:/Users/hari.dubey/Desktop/node_Projects/project2/src/app/product.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})


export class EditProductComponent implements OnInit {
  name:string
  amount:number
  id:number

  books=[]

  constructor(private productservice: ProductService,private route:ActivatedRoute) {
      this.id = route.snapshot.params['id'];
      productservice.getProduct(this.id).subscribe((product)=>{
        this.id = product[0].BookId
        this.amount = product[0].Amount
        this.name = product[0].BookName
      })
   }
  ngOnInit() {
  }

  edit(){
    this.productservice.editproduct(this.id,this.name,this.amount);
  }

}

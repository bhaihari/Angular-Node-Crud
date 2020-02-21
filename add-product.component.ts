import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import {ProductService} from 'C:/Users/hari.dubey/Desktop/node_Projects/project2/src/app/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name=""
  amount=""
  id=""

  books=[]

  
/*
  @Output() hari= new EventEmitter<{bookname:string,bookid:string,amount:string}>();
  addinfo(){
    this.hari.emit({bookid:this.bookid ,amount:this.amount,bookname:this.bookname});
  }
  */
  constructor(private productservice: ProductService) { }

  ngOnInit() {
  }
 
add(){

  this.productservice.addproduct(this.id,this.name,this.amount);
 
}
}

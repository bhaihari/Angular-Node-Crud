import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import {ProductService} from 'C:/Users/hari.dubey/Desktop/node_Projects/project2/src/app/product.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

id  =""

  books=[];

  constructor(private productservice: ProductService, private router:Router) { }

  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts() {
    this.productservice.listproduct().subscribe((books)=>{
      this.books=books
      console.log(books);
    })
  }

  list(){
    this.books=this.productservice.listproduct()
  }
  delete(book){ 
    console.log(book.BookId)
    this.productservice.deleteproduct(book.BookId).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['']);
      //this.getAllProducts();
    });;
  }
  edit(book)
  {
    this.router.navigate(['/EditProduct',book.BookId]);
  }

}







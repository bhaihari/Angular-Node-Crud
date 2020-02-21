import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books=[{
    id:"", name:"", amount:""

  }];
  book:{id:string,name:string,amount:string};
  booktmp:{id:string,name:string,amount:string};
/*
 add(id){
    this.books.push(id);
 }

 edit(id){
  this.books.push(id);
 }

 delete(id){
this.books.pop();
 }
 
 list(){
   return this.books;
 }
 
*/

}

import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 


  }
  url ="http://127.0.0.1:3000"

  public addproduct(id,name,amount){
    let data={
      id:id,
      name:name,
      amount:amount
    }
    console.log(data);
        return this.http.post(this.url+'/Home',data).subscribe((result)=>{
          console.log(result);
        });
    
  }

  public getProduct(id){
    return this.http.get(this.url+'/Home/'+id);
  }


  public editproduct(id,name,amount){
    let data={
      id:id,
      name:name,
      amount:amount
    }
    return this.http.put(this.url+'/Home',data).subscribe((result)=>{
      console.log(result);
    });;
  }


  public deleteproduct(BookId){

    console.log(BookId);
    return this.http.delete(this.url+'/Home/delete/'+BookId);
  }

  // public deleteproduct(BookId){
  //   let data={
  //     BookId:BookId
      
  //   }
  //   console.log(data);
  //   return this.http.delete(this.url+'/Home/'+BookId,BookId);
  // }



  public listproduct():Observable<any>{
 
    return this.http.get(this.url+'/Home');
  }
  
}



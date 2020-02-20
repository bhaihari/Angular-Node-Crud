import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 


  }
  url ="http://127.0.0.1"

  public addproduct(id,name,amount){
    let data={
      id:id,
      name:name,
      amount:amount
    }
    return this.http.post(this.url+'/Home',data);
  }


  public editproduct(id,name,amount){
    let data={
      id:id,
      name:name,
      amount:amount
    }
    return this.http.put(this.url+'/Home',data);
  }


  public deleteproduct(id,name,amount){
    let data={
      id:id,
      name:name,
      amount:amount
    }
    return this.http.delete(this.url+'/Home:id',id);
  }

  public listproduct(id,name,amount){
    let data={
      id:id,
      name:name,
      amount:amount
    }
    return this.http.get(this.url+'/Home',id);
  }
  
  
  
}



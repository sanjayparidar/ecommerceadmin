import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ɵangular_packages_forms_forms_bd } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http : HttpClient) { }
  login(data){
    console.log(data)
   return  this.http.post('https://polar-basin-67929.herokuapp.com/adminLogin',data)    
  }

  addcategory(data){
    return  this.http.post('https://polar-basin-67929.herokuapp.com/addProductCategory',data)  
  }
  addproduct(data){
    return  this.http.post('https://polar-basin-67929.herokuapp.com/addProduct',data) 
    
  }
  viewproduct(data){
    const fb = new FormData();
    fb.append("page",data)
    return this.http.post('https://polar-basin-67929.herokuapp.com/productList',fb)
  }
}

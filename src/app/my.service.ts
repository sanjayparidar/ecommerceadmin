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

  viewcategoroy(){
    return this.http.get('https://polar-basin-67929.herokuapp.com/productCategoryList')
  }

  geteditproductobj(id){
    const fb=new FormData();
    fb.append("id",id)
    return this.http.post('https://polar-basin-67929.herokuapp.com/getProductById',fb)
  }
  updateproduct(data){

    return this.http.post('https://polar-basin-67929.herokuapp.com/updateProduct',data)
  }

  getobjcategory(id){
    const fb=new FormData();
    fb.append("id",id)
    return this.http.post('https://polar-basin-67929.herokuapp.com/getProducCategorytById',fb)
  }
  updatecategory(data){
    return this.http.post('https://polar-basin-67929.herokuapp.com/updateProductCategory',data)
  }

  addpromocode(data){
    return this.http.post('https://polar-basin-67929.herokuapp.com/addCoupon',data)
  }

  viewpromo(data){
    const fb = new FormData();
    fb.append("page",data)
    return this.http.post('https://polar-basin-67929.herokuapp.com/couponList',fb)
  }

  getobjpromo(id){
    const fb=new FormData();
    fb.append("id",id)
    return this.http.post('https://polar-basin-67929.herokuapp.com/getCouponById',fb)
  }
  updatepromo(data){
    return this.http.post('https://polar-basin-67929.herokuapp.com/updateCoupon',data)
  }
  Deleteproduct(id){
    const fb = new FormData();
    fb.append("id",id)
   return this.http.post('https://polar-basin-67929.herokuapp.com/deleteProduct',fb)
  }
}

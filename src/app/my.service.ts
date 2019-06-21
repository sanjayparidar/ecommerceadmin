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
  // contactus(){
  //   return this.http.post('https://polar-basin-67929.herokuapp.com/contactus',{})
  // }

  aboutus(){
    return this.http.get('https://polar-basin-67929.herokuapp.com/aboutus')
  }

  addaboutus(data){
    return this.http.post('https://polar-basin-67929.herokuapp.com/aboutus',data)
  }

  deleteaboutus(id){
    const fb=new FormData();
    fb.append("id",id)
    return this.http.post('https://polar-basin-67929.herokuapp.com/aboutus/delete',fb)
  }
  getobjaboutus(id){
    console.log(id)
    const fb=new FormData();
    fb.append("id",id)
    return this.http.post('https://polar-basin-67929.herokuapp.com/aboutus/edit',fb)
  }

  updateaboutus(data){
    return this.http.post('https://polar-basin-67929.herokuapp.com/aboutus/update',data)
  }

  order(){
    return this.http.get('https://polar-basin-67929.herokuapp.com/orderhistory')
  }
  order_update_status(status,id){
    const data=new FormData();
    data.append("id",id)
    data.append('orderstatus',status)
    return this.http.post('https://polar-basin-67929.herokuapp.com/orderhistory/updatestatus',data)
  }
  customerservice(){
    return this.http.get('https://polar-basin-67929.herokuapp.com/customerservice')
  }
  customerservice_response(data){
    return this.http.post('https://polar-basin-67929.herokuapp.com/customerservice/send_query_result',data)
  }

  viewsubcategory(){
    return this.http.get('https://polar-basin-67929.herokuapp.com/subcategory')
  }

  add_subcategory(data){
    return this.http.post('https://polar-basin-67929.herokuapp.com/subcategory',data)
  }
  getobjsubcategory(id){
    const fb=new FormData();
    fb.append("id",id)
    return this.http.post('https://polar-basin-67929.herokuapp.com/subcategory/getsubcategoryById',fb)
  }
  todaydeal_viewproduct(page){
    const fb = new FormData();
    fb.append("page",page)
    return this.http.post('https://polar-basin-67929.herokuapp.com/todaydeal/find',fb)
  }

  todaydeal_addproduct(data){
    return this.http.post('https://polar-basin-67929.herokuapp.com/todaydeal',data)
  }
  get_edit_todaydeal_obj(id){
    const fb=new FormData();
    fb.append("id",id)
    return this.http.post('https://polar-basin-67929.herokuapp.com/todaydeal/gettodaydealById',fb)

  }
  update_todaydel(data){
     return this.http.post('https://polar-basin-67929.herokuapp.com/todaydeal/update',data)
  }
  firmworks(){
    return this.http.get('https://polar-basin-67929.herokuapp.com/firmworks')
  }
  addfirmworks(fb){
    return this.http.post('https://polar-basin-67929.herokuapp.com/firmworks',fb)

  }

  Delete_todaydeal(id){
    const fb=new FormData();
    fb.append("id",id)
    return this.http.post('https://polar-basin-67929.herokuapp.com/todaydeal/delete',fb)

  }
  delete_promo(id){
    
    const fb=new FormData();
    fb.append("id",id)
    return this.http.post('https://polar-basin-67929.herokuapp.com/couponDelete',fb)
  }
  Delete_firmsworks(id){
    const fb=new FormData();
    fb.append("id",id)
    return this.http.post('https://polar-basin-67929.herokuapp.com/firmworks/delete',fb)
  }
  update_subcategorycategory(data){
    return this.http.post('https://polar-basin-67929.herokuapp.com/subcategory/update',data)
  }
  Delete_subcategory(id){
    const fb=new FormData();
    fb.append("id",id)
    return this.http.post('https://polar-basin-67929.herokuapp.com/subcategory/delete',fb)
  }

}

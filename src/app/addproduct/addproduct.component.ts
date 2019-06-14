import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  SelectedFile: File = null;
  categorys:any;
  units:any;
  stocks:any;
  public msg:any;
  @ViewChild('fileInput') fileInput: ElementRef;
  constructor(private myservice:MyService) { }
  
  ngOnInit() {
    this.categorys=['Add Category',1,2,5,10,15,20];
    this.units=["Add Unit","kg","litter"];
    this.stocks=["Add stock status","In Stock","Out of Stock"]
  }
  userModel = {product_name:'',company_name:"",quantity:"",unit:"",stock_status:"",price:'', category:'',description:""}
  onFileSelected(event){
    this.SelectedFile = <File>event.target.files[0];
  
  }


  onSubmit(){
    
    const fb = new FormData();
    fb.append('image', this.SelectedFile)
    fb.append('product_name', this.userModel.product_name)
    fb.append('company_name', this.userModel.company_name)
    fb.append('quantity', this.userModel.quantity)
    fb.append('unit', this.userModel.unit)
    fb.append('stock_status', this.userModel.stock_status)
    fb.append('price', this.userModel.price)
    fb.append('category', this.userModel.category)
    fb.append('description', this.userModel.description)
     console.log(this.SelectedFile)
    this.myservice.addproduct(fb)
    .subscribe(res=>{
         this.msg="Product Succfully add"
         this.userModel = {product_name:'',company_name:"",quantity:"",unit:"",stock_status:"",price:'', category:'',description:""}
    })
  
  }
   
}

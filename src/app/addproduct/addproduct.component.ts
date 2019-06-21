import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MyService } from '../my.service';
import { Router } from '@angular/router';

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
  categorydata:any;
  subcategorys:any;
  subcategory:any=[]
  obj:any={}
  subcategoryarray:any;
  @ViewChild('fileInput') fileInput: ElementRef;
  constructor(private myservice:MyService,private router:Router) { }
  
  ngOnInit() {
    this.myservice.viewcategoroy()
    .subscribe(res=>{
      console.log(res)
      this.categorydata=res
      this.categorys=this.categorydata.data

    })
    this.myservice.viewsubcategory()
    .subscribe(res=>{
      console.log(res)
      this.subcategory=res
      this.subcategoryarray=res
      
    });
    
    this.units=["Add Unit","kg"];
    this.stocks=["Add stock status","In Stock","Out of Stock"]
  }
  userModel = {product_name:'',company_name:"",quantity:"",unit:"",stock_status:"",price:'',subcategoryid:'', categoryid:'',description:""}
  onFileSelected(event){
    this.SelectedFile = <File>event.target.files[0];
  
  }

  category(id){
    console.log(id)
    this.subcategorys=[ ]
    console.log(this.subcategory.length)
for (var i =0;i<this.subcategoryarray.length; i++){
  
  if(this.subcategoryarray[i].categoryid==id){
    console.log('hello')
    this.obj={}
     this.obj._id=this.subcategoryarray[i]._id
     this.obj.subcategory=this.subcategoryarray[i].subcategory
     this.subcategorys.push(this.obj)
  }
  
}
    
     this.subcategory=this.subcategorys
  }


  onSubmit(){
    console.log('hello')
    console.log(this.userModel)
    
    const fb = new FormData();
    fb.append('image', this.SelectedFile)
    fb.append('product_name', this.userModel.product_name)
    fb.append('company_name', this.userModel.company_name)
    fb.append('quantity', this.userModel.quantity)
    fb.append('unit', this.userModel.unit)
    fb.append('stock_status', this.userModel.stock_status)
    fb.append('price', this.userModel.price)
    fb.append('categoryid', this.userModel.categoryid)
    fb.append('description', this.userModel.description)
    fb.append('subcategoryid',this.userModel.subcategoryid)
     console.log(this.SelectedFile)
    this.myservice.addproduct(fb)
    .subscribe(res=>{
        this.router.navigate(['viewproduct'])
    })
  
  }
   
}

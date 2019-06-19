import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MyService } from '../my.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todaydeal',
  templateUrl: './todaydeal.component.html',
  styleUrls: ['./todaydeal.component.css']
})
export class TodaydealComponent implements OnInit  {
  public table:any;
  public data:any;
  public obj={product_name:'',_id:''};
  
  
    constructor(private myservice:MyService,private router:Router) { }
  
    ngOnInit() {
      this.myservice.todaydeal_viewproduct("1")
      .subscribe(res=>{
        console.log(this)
        this.data=res
        this.table=this.data.data
        console.log(this.table)
      })
    }
  
    deleteconfirmation(objdelete){
         this.obj=objdelete;
    }
  
  delete(id){
  
    var index= this.table.findIndex(i => i._id ==id);
      console.log(index)
      this.table.splice(index,1)
        
         this.myservice.Deleteproduct(id)
        .subscribe(res =>  {
         },
         error =>{
           console.log(error)
          
         }
       );
    
  }
  
  editproduct(id){
    this.router.navigate(['updatetodaydeal',id]);
    
  }
   
}

// todaydeal add

@Component({
  selector: 'app-addtodaydeal',
  templateUrl: './addtodaydeal.component.html',
  styleUrls: ['./todaydeal.component.css']
})
export class AddtodaydealComponent implements OnInit {
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
     this.obj.subcategoryid=this.subcategoryarray[i]._id
     this.obj.subcategory=this.subcategoryarray[i].subcategory
     this.subcategorys.push(this.obj)
  }
  
}
    
     this.subcategory=this.subcategorys
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
    fb.append('categoryid', this.userModel.categoryid)
    fb.append('description', this.userModel.description)
    fb.append('subcategoryid',this.userModel.subcategoryid)
     console.log(this.SelectedFile)
    this.myservice.todaydeal_addproduct(fb)
    .subscribe(res=>{
        this.router.navigate(['viewproduct'])
    })
  
  }
   
}


// today deal add


// update deal
@Component({
  selector: 'app-updatetodaydeal',
  templateUrl: './updatetodaydeal.component.html',
  styleUrls: ['./todaydeal.component.css']
})
export class UpdatetodaydealComponent implements OnInit {
public userModel:any={};
public productres:any;
public categorys:any;
public units :any;
public stocks:any;
SelectedFile: File = null;
subcategory:any=[];
subcategoryarray:any=[];
  constructor(private myservice:MyService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
  
    this.units=["Add Unit","kg"];
    this.stocks=["Add stock status","In Stock","Out of Stock"]
  

    this.route.params.subscribe( params =>
      
     this.myservice.get_edit_todaydeal_obj(params['id'])
     .subscribe(res=>{
       console.log(res)
       this.productres=res
      //  userModel = {product_name:'',company_name:"",quantity:"",unit:"",stock_status:"",price:'',subcategoryid:'', categoryid:'',description:""}
       this.userModel={id:this.productres.data[0]._id,product_name:this.productres.data[0].product_name,company_name:this.productres.data[0].company_name,quantity:this.productres.data[0].quantity,unit:this.productres.data[0].unit,stock_status:this.productres.data[0].stock_status,price:this.productres.data[0].price, categoryid:this.productres.data[0].categoryid,subcategoryid:this.productres.data[0].subcategoryid,description:this.productres.data[0].description}
       
     })
  )
  this.myservice.viewsubcategory()
  .subscribe(res=>{
    console.log(res,"ssssssssssssssssssssssss")
    this.subcategory=res
    this.subcategoryarray=res
    
  });

 }

 onFileSelected(event){
  this.SelectedFile = <File>event.target.files[0];
  console.log(this.SelectedFile)
}

  onSubmit(){
    console.log(this.userModel)
    const fb = new FormData();
    fb.append('image', this.SelectedFile)
    fb.append('id',this.userModel.id)
    fb.append('product_name', this.userModel.product_name)
    fb.append('company_name', this.userModel.company_name)
    fb.append('quantity', this.userModel.quantity)
    fb.append('unit', this.userModel.unit)
    fb.append('stock_status', this.userModel.stock_status)
    fb.append('price', this.userModel.price)
    fb.append('category', this.userModel.category)
    fb.append('description', this.userModel.description)


    this.myservice.updateproduct(this.userModel)
    .subscribe(res=>{
      console.log
      this.router.navigate(['/viewproduct']);
    })
  }

}

// update deal


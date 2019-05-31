import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
public productmodel:any={};
public productres:any;
public categorys:any;
public units :any;
public stocks:any;
SelectedFile: File = null;
  constructor(private myservice:MyService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.categorys=['Add Category',1,2,5,10,15,20];
    this.units=["Add Unit","kg","litter"];
    this.stocks=["Add stock status","In Stock","Out of Stock"]
  

    this.route.params.subscribe( params =>
      
     this.myservice.geteditproductobj(params['id'])
     .subscribe(res=>{
       this.productres=res
       
       this.productmodel={id:this.productres.data[0]._id,product_name:this.productres.data[0].product_name,company_name:this.productres.data[0].company_name,quantity:this.productres.data[0].quantity,unit:this.productres.data[0].unit,stock_status:this.productres.data[0].stock_status,price:this.productres.data[0].price, category:this.productres.data[0].category,description:this.productres.data[0].description}
       
     })
  )
 }

 onFileSelected(event){
  this.SelectedFile = <File>event.target.files[0];
  console.log(this.SelectedFile)
}

  onSubmit(){
    console.log(this.productmodel)
    const fb = new FormData();
    fb.append('image', this.SelectedFile)
    fb.append('id',this.productmodel.id)
    fb.append('product_name', this.productmodel.product_name)
    fb.append('company_name', this.productmodel.company_name)
    fb.append('quantity', this.productmodel.quantity)
    fb.append('unit', this.productmodel.unit)
    fb.append('stock_status', this.productmodel.stock_status)
    fb.append('price', this.productmodel.price)
    fb.append('category', this.productmodel.category)
    fb.append('description', this.productmodel.description)


    this.myservice.updateproduct(this.productmodel)
    .subscribe(res=>{
      console.log
      this.router.navigate(['/viewproduct']);
    })
  }

}

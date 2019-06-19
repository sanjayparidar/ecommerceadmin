import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
table:any;
  constructor(private service:MyService,private router:Router) { }

  ngOnInit() {
    this.service.viewsubcategory()
    .subscribe(res=>{
      console.log(res)
      this.table=res
    });

  }
  editproduct(id){
    this.router.navigate(['updatesubcategory',id])

  }
}

// updade subcategory
@Component({
  selector: 'app-updatesubecategory',
  templateUrl: './updatesubcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class UpdatesubcategoryComponent implements OnInit {
public subcateres:any;
public userModel:any={};
  constructor(private route:ActivatedRoute,private myservice:MyService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe( params =>
      
      this.myservice.getobjsubcategory(params['id'])
      .subscribe(res=>{
        this.subcateres=res
        console.log(this.subcateres)
        this.userModel={id:this.subcateres[0]._id,categoryid:this.subcateres[0].categoryid,subcategory:this.subcateres[0].subcategory}
      })
   )
  }
  onSubmit(){
    console.log(this.userModel)
    this.myservice.updatecategory(this.userModel)
    .subscribe(res=>{
  
      this.router.navigate(['/viewcategory']);
    })
  }
  
}



// update subcategory


// add subcategory


@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addsubcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class AddsubcategoryComponent implements OnInit {
table:any;
categorydata:any;
categorys:any;
  constructor(private service:MyService,private router:Router) { }

  ngOnInit() {
    this.service.viewcategoroy()
    .subscribe(res=>{
      console.log(res)
      this.categorydata=res
      this.categorys=this.categorydata.data
    })

   }
   userModel={'categoryid':'','subcategory':''}
   
   onSubmit(){
     this.service.add_subcategory(this.userModel)
     .subscribe(res=>{
       this.router.navigate(['/subcategory'])
     })
   }

}


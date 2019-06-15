import { Component, OnInit } from '@angular/core';
import { MyService } from 'src/app/my.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
table:any;
obj:any={title:'',_id:''}
  constructor(private myservice:MyService, private router:Router) { }

  ngOnInit() {
    this.myservice.aboutus()
    .subscribe(res=>{
      console.log(res)
      this.table=res

    })
  }
  
  deleteconfirmation(objdelete){
    this.obj=objdelete;
}

delete(id){

  var index= this.table.findIndex(i => i._id ==id);
    console.log(index)
    this.table.splice(index,1)
      
       this.myservice.deleteaboutus(id)
      .subscribe(res =>  {
       },
       error =>{
         console.log(error)
        
       }
     );
  
}

editproduct(id){
  this.router.navigate(['/updateaboutus',id]);
  
}

}


// add aboutus
@Component({
  selector: 'app-addaboutus',
  templateUrl: './addaboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AddaboutusComponent implements OnInit {

  constructor(private myservice:MyService,private router:Router) { }

  ngOnInit() {
   }
   userModel={title:"",Services:""}
   onSubmit(){
     this.myservice.addaboutus(this.userModel)
     .subscribe(res=>{
       console.log(res)
       this.router.navigate(['/aboutus'])
     })
   }
}


// Add aboutus

// update aboutus

@Component({
  selector: 'app-updateaboutus',
  templateUrl: './updateaboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class UpdateaboutusComponent implements OnInit {
serviceobj:any;
public userModel:any={ };

  constructor(private myservice:MyService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    
    this.route.params.subscribe( params =>
      
      this.myservice.getobjaboutus(params['id'])
      .subscribe(res=>{
        console.log(res)
        this.serviceobj=res
        this.userModel={id:this.serviceobj[0]._id,title:this.serviceobj[0].title,Services:this.serviceobj[0].Services}
        })
       )
     }
     onSubmit(){
      console.log(this.userModel)
      this.myservice.updateaboutus(this.userModel)
      .subscribe(res=>{
        this.router.navigate(['/aboutus']);
      })
    }


}


// update aboutus
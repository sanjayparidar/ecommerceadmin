import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
public table:any;
public data:any;
public obj={product_name:'',_id:''};


  constructor(private myservice:MyService,private router:Router) { }

  ngOnInit() {
    this.myservice.viewproduct("1")
    .subscribe(res=>{
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
      
    //    this.myservices.Deleteproduct(id)
    //   .subscribe(res =>  {
    //    },
    //    error =>{
    //      console.log(error)
        
    //    }
    //  );
  
}

editproduct(id){
  this.router.navigate(['updateproduct',id]);
  
}
}


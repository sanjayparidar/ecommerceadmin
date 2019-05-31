import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {
public table:any;
public category:any;
public obj={category_name:'',_id:''};

  constructor(private myservice:MyService,private router:Router) { }

  ngOnInit() {
    this.myservice.viewcategoroy()
    .subscribe(res=>{
      this.category=res
      this.table=this.category.data
    })
  }

  deleteconfirmation(objdelete){
    this.obj=objdelete;
}



delete(id){
  console.log(id)

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
  this.router.navigate(['updatecategory',id]);
  
}


}

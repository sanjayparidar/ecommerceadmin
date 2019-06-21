import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewpromo',
  templateUrl: './viewpromo.component.html',
  styleUrls: ['./viewpromo.component.css']
})
export class ViewpromoComponent implements OnInit {
public obj:any={ }
public promo_res:any;
public table:any;
  constructor(private myservice:MyService, private router:Router) { }

  ngOnInit() {
    this.myservice.viewpromo('1')
    .subscribe(res=>{
      this.promo_res=res
      console.log(this.promo_res)
      this.table=this.promo_res.data
      
    })
    
  }

  deleteconfirmation (objdelete){
    this.obj=objdelete;
  }
  delete(id){
    var index= this.table.findIndex(i => i._id ==id);
      console.log(index)
      this.table.splice(index,1)
        console.log(id)
         this.myservice.delete_promo(id)
        .subscribe(res =>  {
          console.log(res)
         },
         error =>{
           console.log(error)
          
         }
       );    

  }
editproduct(id){
  this.router.navigate(['updatepromo',id]);


}
}
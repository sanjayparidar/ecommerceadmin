import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
public table:any;
public data:any;
public obj={product_name:'',_id:''};


  constructor(private myservice:MyService) { }

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

delete(obj){
  
}
}

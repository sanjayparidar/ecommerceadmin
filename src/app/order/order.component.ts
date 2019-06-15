import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
table:any;
  constructor( private service:MyService) { }
  
  ngOnInit() {
    this.service.order()
    .subscribe(res=>{
      console.log(res)
      this.table=res
    });
  }
  order_status(status,id){
    var index= this.table.findIndex(i => i._id ==id);
    this.table[index].orderstatus=status
    this.service.order_update_status(status,id)
    .subscribe(res=>{
      
    })
  }

}

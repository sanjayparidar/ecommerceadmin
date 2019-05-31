import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-addpromo',
  templateUrl: './addpromo.component.html',
  styleUrls: ['./addpromo.component.css']
})
export class AddpromoComponent implements OnInit {
public disc_type:any;
public msg:any;
  constructor(private myservice:MyService) { }

  ngOnInit() {
    this.disc_type=['Rupess'];
    this.msg='';
  }
userModel={coupon_name:'',coupon_code:'',discount_type:'',discount_amount:'',start_date:'',end_date:''}

onSubmit(){
  this.myservice.addpromocode(this.userModel)
  .subscribe(res=>{
    this.userModel={coupon_name:'',coupon_code:'',discount_type:'',discount_amount:'',start_date:'',end_date:''}
    this.msg="Successfully add Promo"
  })

}
}

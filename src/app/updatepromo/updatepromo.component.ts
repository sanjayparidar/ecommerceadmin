import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatepromo',
  templateUrl: './updatepromo.component.html',
  styleUrls: ['./updatepromo.component.css']
})
export class UpdatepromoComponent implements OnInit {
public promo_res:any;
public userModel:any={};
public disc_type:any;
  constructor(private myservice:MyService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.disc_type=['Rupess']
    this.route.params.subscribe( params =>
      
      this.myservice.getobjpromo(params['id'])
      .subscribe(res=>{
        this.promo_res=res
        this.userModel={id:this.promo_res.data[0]._id,coupon_name:this.promo_res.data[0].coupon_name,coupon_code:this.promo_res.data[0].coupon_code,discount_type:this.promo_res.data[0].discount_type,discount_amount:this.promo_res.data[0].discount_amount,start_date:this.promo_res.data[0].start_date,end_date:this.promo_res.data[0].end_date}
        })
       )
     }
     onSubmit(){
      console.log(this.userModel)
      this.myservice.updatepromo(this.userModel)
      .subscribe(res=>{
        this.router.navigate(['/viewpromo']);
      })
    }


}

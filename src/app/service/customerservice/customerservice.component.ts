import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyService } from 'src/app/my.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerservice',
  templateUrl: './customerservice.component.html',
  styleUrls: ['./customerservice.component.css']
})
export class CustomerserviceComponent implements OnInit {
  @Output() closeModalEvent = new EventEmitter<boolean>();
table:any;
  constructor(private myservice:MyService,private router:Router) { }

  ngOnInit() {
    this.myservice.customerservice()
    .subscribe(res=>{
      console.log(res)
      this.table=res
    });
  }
 
  userModel={title:'',note:'',id:''}
  onSubmit(){
    console.log(this.userModel)
    this.myservice.customerservice_response(this.userModel)
    .subscribe(res=>{
      console.log(res)
    })
  }

  getemail(id){
    this.userModel={title:'',note:'',id:id}

  }
  onCloseModal(event: any){
    console.log("hello")
    this.closeModalEvent.emit(false);  
   }

}

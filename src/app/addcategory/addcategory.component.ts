import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  
  constructor(private myservice:MyService) { }

  ngOnInit() {
    
  }
  userModel = {category_name:''}

  onSubmit(){
     this.myservice.addcategory(this.userModel)
     .subscribe(res=>{
       console.log(res)
     })
  }

}

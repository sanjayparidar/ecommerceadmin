import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  
  constructor(private myservice:MyService,private router:Router) { }

  ngOnInit() {
    
  }
  userModel = {category_name:''}

  onSubmit(){
     this.myservice.addcategory(this.userModel)
     .subscribe(res=>{
      this.router.navigate(['/viewcategory']);
       
     })
  }

}

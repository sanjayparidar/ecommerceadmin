import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-viewcontactus',
  templateUrl: './viewcontactus.component.html',
  styleUrls: ['./viewcontactus.component.css']
})
export class ViewcontactusComponent implements OnInit {
   contactus:any;
  constructor(private myservice:MyService) { }

  ngOnInit() {
    // this.myservice.contactus()
    // .subscribe(res=>{
    //   console.log('hello')
    //   console.log(res)
    // })
  }

}

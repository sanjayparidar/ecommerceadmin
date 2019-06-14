import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public user:any;
public msg:any;
  constructor(private myservice:MyService,private router:Router,private auth:AuthService) { }

  ngOnInit() {
    this.msg=""
  }

  userModel = {email:"", password: ""}
  onSubmit(){
  this.myservice.login(this.userModel)
  .subscribe(res=>{
    console.log(res)
    this.user=res;
    if(this.user.status==200){
      this.auth.sendToken("userLoggedin")
      this.router.navigate(['/index']);

    }else{
       this.msg="User name and password is incorrect"
    }
  })
  

}


}

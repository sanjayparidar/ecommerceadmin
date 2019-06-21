import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MyService } from '../my.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firmworks',
  templateUrl: './firmworks.component.html',
  styleUrls: ['./firmworks.component.css']
})
export class FirmworksComponent implements OnInit {
table:any;
formworks:any;
obj={title:'',_id:''};
  constructor(private service:MyService,private router:Router) { }

  ngOnInit() {
    this.service.firmworks()
    .subscribe(res=>{
       this.formworks=res;
       this.table=this.formworks.data
    })
  }
  deleteconfirmation(objdelete){
    this.obj=objdelete;
}

delete(id){

var index= this.table.findIndex(i => i._id ==id);
 console.log(index)
 this.table.splice(index,1)
   
    this.service.Delete_firmsworks(id)
   .subscribe(res =>  {
    },
    error =>{
      console.log(error)
     
    }
  );

}


}



// add works
@Component({
  selector: 'app-addfirmworks',
  templateUrl: './addfirmworks.component.html',
  styleUrls: ['./firmworks.component.css']
})
export class AddfirmworksComponent implements OnInit {
table:any;
formworks:any;
types:any;
imageshow: boolean = false;
linkshow:boolean=false;
SelectedFile: File = null;

@ViewChild('fileInput') fileInput: ElementRef;
  constructor(private service:MyService,private router:Router) { }

  ngOnInit() {
   this.types=['image','video']
    
  }
  userModel={title:'',type:'',link:''}
  onFileSelected(event){
    this.SelectedFile = <File>event.target.files[0];
  
  }
  
  typechange(type){
    if(type=='image'){
     this.imageshow=true;
     this.linkshow=false; 
    }
    if(type=='video'){
      this.imageshow=false;
      this.linkshow=true; 
    }
  }

  onSubmit(){
    const fb = new FormData();
    if(this.userModel.link==''){
      
      fb.append('makeproduct',this.SelectedFile)
      fb.append('title',this.userModel.title)
      fb.append('type',this.userModel.type)
    }else{
     
      fb.append('makeproduct',this.userModel.link)
      fb.append('title',this.userModel.title)
      fb.append('type',this.userModel.type)
    }

    this.service.addfirmworks(fb)
    .subscribe(res=>{
         this.router.navigate(['firmworks'])
    })
  }


}

// add works
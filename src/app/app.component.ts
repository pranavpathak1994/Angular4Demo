import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, NgForm, FormBuilder} from '@angular/forms';
import { Detail } from './detail';

declare var swal: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  details:Array<Detail>;
  y:Array<Detail>;
  private myform: FormGroup;
  username:String='';
  password:String='';
  number:String='';  
  mail:String='';
  cityy:String='';
  exist:Boolean=false;
  Repdata;  


  constructor(private fb: FormBuilder) {
    this.details=[];
    this.y=[];
  }
  
  
  ngOnInit() {
    this.myform = this.fb.group({
    user: ['',[Validators.required, Validators.minLength(6)]],
    passwd: ['',[Validators.required, Validators.minLength(8)]],
    contact: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[1-9][0-9]{0,20}')]],
    email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    city: ['',[Validators.required]]
    })
  }

  get user() { 
    return this.myform.get('user'); 
  }
  get passwd() { 
    return this.myform.get('passwd'); 
  }
  get contact() { 
    return this.myform.get('contact'); 
  }
  get email() { 
    return this.myform.get('email'); 
  }
  get city() { 
    return this.myform.get('city'); 
  }       

  onSubmit(myform: NgForm) {
    console.log(myform.value);
    return this.myform.value;
}

init(){
  this.myform = this.fb.group({
    user: ['',[Validators.required, Validators.minLength(6)]],
    passwd: ['',[Validators.required, Validators.minLength(8)]],
    contact: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[1-9][0-9]{0,20}')]],
    email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    city: ['',[Validators.required]]
    }) 
}

   print(user,passwd,contact,email,city) {
  
    let newdetail=new Detail(user,passwd,contact,email,city); 
    for(let i=0;i<this.details.length;i++){
    if(newdetail.user===this.details[i].user){
      this.exist=true;
    }}
    if(!this.exist){
    this.details.push(newdetail);
    swal("Submission successful","Your details are submitted successfully","success");
    this.username='';
    this.password='';
    this.number='';
    this.mail='';
    this.cityy='';
    }
    else{
      swal("Already exist","The details entered exist already","error");
      this.username='';
      this.password='';
      this.number='';
      this.mail='';
      this.cityy='';
      this.exist=false;

    }      

  }

  edit(detail){
    this.username=detail.user;
    this.password=detail.passwd;
    this.number=detail.contact;
    this.mail=detail.email;
    this.cityy=detail.city;
    let index=this.details.indexOf(detail);
    this.y=this.details.splice(index,1); 
  }

  delete(detail){
   
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this row!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("The row has been deleted!", {
          icon: "success",
        });
        let index = this.details.indexOf(detail);
        this.details.splice(index,1);
      } else {
        swal("Your row is not deleted!");
      }
    });
  }

  cancel(){
    this.details.push(this.y[0]);
    this.username='';
    this.password='';
    this.number='';
    this.mail='';
    this.cityy='';
  }
}



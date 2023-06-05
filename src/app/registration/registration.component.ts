import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { ToasterService } from '../services/toaster.service';

interface Courses {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{

  // loading spinner
  isLoading:boolean=false

  favoriteSeason: string=""
  seasons: string[] = ['Male', 'Female', 'Others'];
  courses:Courses[] = [
    {value: 'Biology', viewValue: 'biology'},
    {value: 'Humanities', viewValue: 'Humanities'},
    {value: 'Computer Science', viewValue: 'Computer Science'},
    {value: 'Commerce', viewValue: 'Commerce'}

  ];


  // validation
  registerForm = this.fb.group({
    fname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    lname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    address:['',[Validators.required]],
    mobile:['',[Validators.required,Validators.pattern('[0-9 ]*'),Validators.minLength(10),Validators.maxLength(10)]],
    email: ['',[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
    gender  : ['',Validators.required],
    dob : ['',Validators.required],
    course : ['',Validators.required]
  })

  constructor(private fb:FormBuilder,private api:ApiService,private route:Router,private toster:ToasterService){}

  register(){
    if (this.registerForm.valid) {
      // get input values
      let fname = this.registerForm.value.fname
      let lname = this.registerForm.value.lname
      let address = this.registerForm.value.address
      let mobile = this.registerForm.value.mobile
      let email = this.registerForm.value.email
      let gender = this.registerForm.value.gender
      let dob = this.registerForm.value.dob
      let course = this.registerForm.value.course

      // set isLoading is true
      this.isLoading=true

      // register api call in service
      this.api.register(fname,lname,address,mobile,email,gender,dob,course).subscribe({
        next:(response:any)=>{
          setTimeout(() => {
            // set isLoading is false
            this.isLoading=false

            // this.toster.showSuccess(`${response.fname} register successfully`,"Success")

            this.route.navigateByUrl('view-all')
          }, 2000);
        },
        error:(err:any)=>{
          // this.toster.showError(err.error,"Fail")
          alert(err.error)
        }
      })
      
    } else {
      // this.toster.showWarning("Invalid Form","Warning")
      alert("Invalid Form")
    }
  }

}

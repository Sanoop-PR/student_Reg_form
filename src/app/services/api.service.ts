import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url = 'http://localhost:3000'

  constructor(private http:HttpClient) { }

  register(fname:any,lname:any,address:any,mobile:any,email:any,gender:any,dob:any,course:any){
    const body={
      fname,
      lname,
      address,
      mobile,
      email,
      gender,
      dob,
      course
    }
    return this.http.post(`${this.base_url}/students/register`,body)
  }

  getAllDetails(){
    return this.http.get(`${this.base_url}/students/viewall`)
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  searchKey:string='';
  getAllDetails:any=[]

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getAllDetails().subscribe({
      next:(response:any)=>{
        // console.log(response)
        this.getAllDetails=response
      },
      error:(err:any)=>{
        console.log(err.error)
      }
    })
  }

  displayedColumns: string[] = ['position', 'name', 'address', 'mobile','email','gender','dob','course'];


}

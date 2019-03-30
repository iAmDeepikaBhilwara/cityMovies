import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MovieService} from '../movie.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  customer:any={};
  customers:any=[]
  constructor(private router:Router,private movieservice:MovieService) { }

  ngOnInit() {
    this.movieservice.getCustomers().subscribe((result)=>this.customers=result);
  }
login(){
  for(var i=0;i<this.customers.length;i++){
  if(this.customer.mail==this.customers[i].email && this.customers[i].Password == this.customer.Password ){
    console.log("LoginWorking");
    this.router.navigate(['./list']);
       }
  // else{
  //        alert("Incorrect Mail and Password");   
  //    }
  
  }

}
}

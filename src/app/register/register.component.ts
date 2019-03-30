import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MovieService } from '../movie.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  customer={
    id:0,
    name:"",
    phone:0,
    email:"",
    password:"",
    address:"",
  }

  constructor(private router:Router,private movieService:MovieService) { }

  ngOnInit() {}
  login(customer)
  {

    this.movieService.addRemoteCustomers(customer).subscribe(()=>console.log("hi"));
    customer={id:0,name:" ",email:" ",address:" ",phone:0};
    this.router.navigate(['./login']);

  }
    

  
    
  }



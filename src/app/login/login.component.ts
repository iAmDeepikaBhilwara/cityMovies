import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MovieService} from '../movie.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  customer:any={};
  customers:any=[]
  constructor(private router:Router,private movieservice:MovieService,public alertController: AlertController) { }

  ngOnInit() {}
  login(){
    // for(var i=0;i<this.customers.length;i++){
    // if(this.customer.mail==this.customers[i].email && this.customers[i].Password == this.customer.Password ){
      
      this.movieservice.getCustomers(this.customer).subscribe((result)=>{
        
        
  
           if(result!=null)
          {
             this.router.navigate(['./list']);
          }
            else 
           {
             this.presentAlert();
           }
  
      });
      }
      async presentAlert() {
        const alert = await this.alertController.create({
          header: 'Alert',
               message: 'Invalid User',
          buttons: ['OK']
        });
    
        await alert.present();
      }
    
     }
  
  
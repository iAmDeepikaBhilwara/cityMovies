import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MovieService} from '../movie.service';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss'],
})
export class ForgetComponent implements OnInit {

  customer: any={};
  password:any={};

  constructor(private router:Router,private movieService:MovieService,public alertController: AlertController) { }

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Password',
      // subHeader: 'Continue with booking tickets',
      message: ('Your Password is:'+this.password[0].password),
      buttons: ['OK'],
     

    });

    await alert.present();
  }

  login()
  {
    console.log(this.customer);
    this.movieService.getRemoteCustomerPassword(this.customer.phone).subscribe((customer)=>{
      this.password=customer;this.password=this.password.result; 
      
      this.presentAlert();
       this.router.navigate(['./login']);
      
     
  })

}
}

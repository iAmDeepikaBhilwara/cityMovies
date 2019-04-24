import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

// import {Razorpay} from 'com.razorpay.cordova';
declare var RazorpayCheckout: any;

@Component({
  selector: 'app-make-pay',
  templateUrl: './make-pay.component.html',
  styleUrls: ['./make-pay.component.scss'],
})
export class MakePayComponent implements OnInit {

  constructor(private router:Router,public alertController: AlertController) { }

  ngOnInit() {}

  

  payment()
  {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_J88UISZBtKQAHQ',
      // order_id: 'order_7HtFNLS98dSj8x',
      amount: '5000',
      name: 'foo',
      prefill: {
        email: 'pranav@razorpay.com',
        contact: '8879524924',
        name: 'Pranav Gupta'
      },
      theme: {
        color: '#F37254'
      }
    }

    
     
    var successCallback = function(success) {
      this.presentAlert();
      var orderId = success.razorpay_order_id
      var signature = success.razorpay_signature
    }
     
    var cancelCallback = function(error) {
      alert(error.description + ' (Error '+error.code+')')
    }
     
    RazorpayCheckout.on('payment.success', successCallback)
    RazorpayCheckout.on('payment.cancel', cancelCallback)
    RazorpayCheckout.open(options)
    this.router.navigate(['/payment']);
  }
  

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'ok',
      buttons: ['OK']
    });

    await alert.present();
  }


}

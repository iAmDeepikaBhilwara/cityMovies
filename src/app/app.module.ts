import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule }    from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { ListComponent } from './list/list.component';
import { BookingComponent } from './booking/booking.component';
import { MakePayComponent } from './make-pay/make-pay.component';
import { PaymentComponent } from './payment/payment.component';
import { OfferComponent } from './offer/offer.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent,LoginComponent,RegisterComponent,ForgetComponent,ListComponent,BookingComponent,
  MakePayComponent,PaymentComponent,OfferComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { ListComponent } from './list/list.component';
import { BookingComponent } from './booking/booking.component';
import { MakePayComponent } from './make-pay/make-pay.component';
import { PaymentComponent } from './payment/payment.component';
import { OfferComponent } from './offer/offer.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'forget',
    component:ForgetComponent
  },
  {
    path:'list',
    component:ListComponent
  },
  {
    path:'booking/:id',
    component:BookingComponent
  },
  {
    path:'makePay',
    component:MakePayComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
    path:'offer',
    component:OfferComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

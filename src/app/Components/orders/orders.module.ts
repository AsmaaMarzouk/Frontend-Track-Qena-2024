import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackOrderComponent } from './track-order/track-order.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:'UserCart',component:CartComponent,title:'user cart page'},
  {path:'TrackOrder',component:TrackOrderComponent,title:'Track Order page'},

];


@NgModule({
  declarations: [
    TrackOrderComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrdersModule { }

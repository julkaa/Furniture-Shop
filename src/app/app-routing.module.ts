import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './main/defaultUser/home/home.component';
import {ShopComponent} from './main/defaultUser/shop/shop.component';
import {PaymentComponent} from "./payment/payment.component";
import {ProductComponent} from "./main/defaultUser/home/product/product.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Shop/Product/:id', component: ProductComponent},
  {path: 'Checkout', component: PaymentComponent},
  {path: 'Shop', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

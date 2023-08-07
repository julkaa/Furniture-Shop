import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './main/defaultUser/home/home.component';
import {ProductListComponent} from './product-list/product-list.component';
import {NumberWithCommasPipe} from './pipes/numberWithCommas.pipe';
import {ShopComponent} from './main/defaultUser/shop/shop.component';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PaginationPipe} from './pipes/pagination.pipe';
import {MatDialogModule} from "@angular/material/dialog";
import {CartDialogComponent} from './cart-dialog/cart-dialog.component';
import {PaymentComponent} from './payment/payment.component';
import {SuccessDialogComponent} from './payment/success-dialog/success-dialog.component';
import {ProductComponent} from "./main/defaultUser/home/product/product.component";
import {HomeSilderComponent} from "./main/defaultUser/home/home-slider/home-slider.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    NumberWithCommasPipe,
    PaginationPipe,
    HomeSilderComponent,
    ShopComponent,
    CartDialogComponent,
    PaymentComponent,
    SuccessDialogComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

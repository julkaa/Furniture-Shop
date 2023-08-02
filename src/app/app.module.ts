import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './main/defaultUser/home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NumberWithCommasPipe } from './pipes/numberWithCommas.pipe';
import { HomeSliderComponent } from './main/defaultUser/home/home-slider/home-slider.component';
import { ShopComponent } from './main/defaultUser/shop/shop.component';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationPipe } from './pipes/pagination.pipe';
import { CartPopupComponent } from './cart-popup/cart-popup.component';
import {MatDialogModule} from "@angular/material/dialog";
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
    HomeSliderComponent,
    ShopComponent,
    CartPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

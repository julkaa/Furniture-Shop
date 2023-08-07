import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CartService, IProduct} from "../services/cart.service";
import {CartDialogComponent} from "../cart-dialog/cart-dialog.component";

@Component({
  selector: 'header-section',
  templateUrl: './header.component.html',
  styleUrls: [
    '../icons.scss',
    './header.component.scss'
  ]
})
export class HeaderComponent {
  products: IProduct[];

  constructor(private dialog: MatDialog, public cartService: CartService) {
    this.products = [];
    cartService.Subscribe(v => {
      this.products = v;
      this.cartService.getSumOfItem(this.products);
    })
  }

  public openCartSection(): void {
    this.dialog.open(CartDialogComponent, {width: '50%', data: {isClose: true}});
  }

}

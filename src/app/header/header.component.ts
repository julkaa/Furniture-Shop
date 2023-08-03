import {Component} from '@angular/core';
import {CartPopupComponent} from "../cart-popup/cart-popup.component";
import {MatDialog} from "@angular/material/dialog";
import {UserCartService} from "../services/user-cart.service";

@Component({
  selector: 'header-section',
  templateUrl: './header.component.html',
  styleUrls: [
    '../icons.scss',
    './header.component.scss'
  ]
})
export class HeaderComponent {
  constructor(private dialog: MatDialog, public cartService: UserCartService) {
  }

  public openCartSection(): void {
    this.dialog.open(CartPopupComponent, {width: '50%', data: {isClose: true}});
  }

}

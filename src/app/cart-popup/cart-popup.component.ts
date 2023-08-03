import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ModalDialogConfig} from "./modal-window";
import {UserCartService} from "../services/user-cart.service";

@Component({
  selector: 'cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.scss', "../styles/grid.scss"]
})
export class CartPopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public dialogConfig: ModalDialogConfig, public cartService: UserCartService) {

  }

  public decrease(el, index): void {
    if (el.amount > 0) {
      this.cartService.cartCollections[index].amount--;
      this.cartService.deleteProduct();
    }
  }

  public increase(el, index): void {
    this.cartService.cartCollections[index].amount++;
    this.cartService.getSumOfData();
  }

  public deleteItem(index): void {
    this.cartService.deleteProduct(index);
  }
}

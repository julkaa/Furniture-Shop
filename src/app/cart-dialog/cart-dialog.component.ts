import {Component} from '@angular/core';
import {CartService, IProduct} from "../services/cart.service";

@Component({
  selector: 'cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss']
})
export class CartDialogComponent {
  products: IProduct[]

  constructor(public cartService: CartService) {
    this.products = [];
    cartService.Subscribe(value => {
      this.products = value;
    })
  }

  public decrease(index: number, quantity: number): void {
    if (quantity > 1) {
      this.cartService.ChangeItemQuantity(index, --quantity);
    }
  }

  public increase(index: number, quantity: number): void {
    this.cartService.ChangeItemQuantity(index, ++quantity);
  }

  public deleteItem(id: string): void {
    this.cartService.RemoveFromCart(id);
  }
}

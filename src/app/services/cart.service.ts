import {Injectable} from '@angular/core';
import {BehaviorSubject, Subscription} from "rxjs";
import ProductCard from "../models/productCard.model";

export interface IProduct {
  id: string,
  quantity: number,
  info: {
    name: string,
    shortDescription: string,
    price: number,
    imageUrl: string
  },
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsSubject: BehaviorSubject<IProduct[]>;
  products: IProduct[];
  quantityOfAll: number = 0;
  totalPrice: number = 0;

  constructor() {
    this.products = [];
    this.productsSubject = new BehaviorSubject<IProduct[]>([]);
    const cart = localStorage.getItem("cart")
    if (cart) {
      const parsedCart: IProduct[] = JSON.parse(cart);
      this.products = parsedCart;
      this.productsSubject.next(this.products);
    }
  }

  Subscribe(action: ((value: IProduct[]) => void)): Subscription {
    return this.productsSubject.subscribe(action);
  }

  AddToCart(productId: string, item: ProductCard, quantity: number = 1) {
    const productIndex = this.products.findIndex(value => {
      return value.id == productId
    })
    if (productIndex > -1)
      this.products[productIndex].quantity += quantity;
    else
      this.products.push({
        id: productId, info: {
          name: item.name,
          shortDescription: item.shortDescription,
          price: item.price,
          imageUrl: item.imageUrl,
        }, quantity: 1
      })
    this._update()

  }

  RemoveFromCart(productId: string): void {
    this.products = this.products.filter(obj => obj.id !== productId);

    this._update()
  }

  getSumOfItem(products: IProduct[]): void {
    this.quantityOfAll = 0;
    this.totalPrice = 0;
    products.forEach(item => {
      this.quantityOfAll += item.quantity;
      this.totalPrice += (item.info.price * item.quantity);
    });
  }

  ChangeItemQuantity(index: number, newValue: number): void {
    this.products[index].quantity = newValue;
    this._update()
  }

  FlushProducts() {
    this.products = []
    this.productsSubject.next(this.products);
    localStorage.removeItem('cart');
  }

  private _update() {
    this.productsSubject.next(this.products);
    localStorage.setItem("cart", JSON.stringify(this.products))
  }
}

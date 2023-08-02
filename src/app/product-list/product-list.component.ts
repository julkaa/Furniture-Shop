import {Component, Input} from '@angular/core';
import ProductCard from '../models/productCard.model';
import {Observable} from 'rxjs';
import {UserCartService} from "../services/user-cart.service";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['../icons.scss', './product-list.component.scss']
})
export class ProductListComponent {
  @Input() quantity: number = 0;
  @Input() data: Observable<ProductCard[]> | null = null;

  constructor(private cartService: UserCartService) {
  }

  public addToCart(item: any): void {
    this.cartService.setArrayData(item);
  }
}

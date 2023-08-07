import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {crumbBarTypes} from "src/app/services/user-state.models";
import {UserStateService} from "src/app/services/user-state.service";
import ProductCard from "../../../../models/productCard.model";
import {fakeDB} from "../../../../fakeDB/faceDB";
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: 'product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss', '../../../icons.scss']
})
export class ProductComponent {
  id: string = '';
  quantity: number = 1;
  product: ProductCard = {
    id: '',
    name: '',
    shortDescription: '',
    price: 0,
    imageUrl: '',
    isNew: false,
    hasDiscount: false,
    discountPercentage: null,
    discountedPrice: null
  };

  constructor(userStateService: UserStateService, private activatedRoute: ActivatedRoute, public cartService: CartService) {
    activatedRoute.params.subscribe(params => {
      this.id = params["id"];
    })
    userStateService.updateMain({
      crumbBar: crumbBarTypes.small,
      warrantyBar: false
    })
    fakeDB.GetProductCardInfos().subscribe(array => {
      this.product = array.filter(obj => obj.id === this.id)[0];
    })
  }

  public decrease(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  public increase(): void {
    this.quantity++;
  }

  public addToCart(): void {
    this.cartService.AddToCart(this.id, this.product, this.quantity);
  }
}

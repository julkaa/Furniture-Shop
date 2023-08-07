import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {fakeDB} from 'src/app/fakeDB/faceDB';
import ProductCard from 'src/app/models/productCard.model';
import {crumbBarTypes} from 'src/app/services/user-state.models';
import {UserStateService} from 'src/app/services/user-state.service';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['../../../icons.scss', './shop.component.scss'],

})
export class ShopComponent {
  pRangeSelected: number = 16;
  pRangeChanged: boolean = false;
  public readonly productRange: number[] = [
    16,
    32,
    64
  ];

  public readonly totalResultsNumber: Observable<number> = fakeDB.GetTotalResultsNumber();
  public totalPageNumber: number = 0;
  public readonly data: Observable<ProductCard[]> = fakeDB.GetProductCardInfos();

  constructor(private userStateService: UserStateService) {
    this.userStateService.updateMain({
      crumbBar: crumbBarTypes.big,
      warrantyBar: true
    });
    this.totalResultsNumber.subscribe((v) => {
      this.totalPageNumber = Math.ceil(v / this.pRangeSelected)
    })
  }

  public onProductRangeChange() {
    this.pRangeChanged = true;
  }
}

import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCartService {
  public sum: number = 0;
  public price: number = 0;
  public cartCollections: any[] = [];

  constructor() {
  }

  setArrayData(data: any): void {
    let isDuplicate = false;
    const tmp = {item: data, amount: 1};
    this.cartCollections.forEach((el: any) => {
      if (el.item.id === tmp.item.id) {
        el.amount++;
        isDuplicate = true;
        return;
      }
    })
    if (!isDuplicate) {
      this.cartCollections.push(tmp);
    }
    this.getSumOfData();
  }

  getArrayData(): any[] {
    return this.cartCollections;
  }

  getSumOfData(): void {
    this.sum = 0;
    this.price = 0;
    this.cartCollections.forEach(item => {
      this.sum += item.amount;
      this.price += (item.item.price * item.amount);
    });
  }

  deleteProduct(index = -1): void {
    if (index != -1) {
      this.cartCollections[index].amount = 0;
    }
    this.cartCollections = this.cartCollections.filter(obj => obj.amount !== 0);
    this.getSumOfData();
  }
}

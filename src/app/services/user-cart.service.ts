import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCartService {
  public sum: number = 0;
  private cartCollections: any[] = [];

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
    console.log(this.cartCollections);
    console.log(this.sum);
  }

  getArrayData(): any[] {
    return this.cartCollections;
  }

  getSumOfData(): void {
    this.sum = 0;
    this.cartCollections.forEach(item => {
      this.sum += item.amount;
    });
  }
}
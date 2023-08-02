import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { fakeDB } from 'src/app/fakeDB/faceDB';
import homePageSlide from 'src/app/models/homePageSlide.model';
import ProductCard from 'src/app/models/productCard.model';
import { ComponentStateMain } from 'src/app/services/user-state.models';
import { UserStateService } from 'src/app/services/user-state.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['../../../icons.scss', './home.component.scss']
})
export class HomeComponent implements OnInit {
tmp = 'yeah';
  public readonly quantity: number = 8;
  public readonly data: Observable<ProductCard[]> = fakeDB.GetProductCardInfos();
  public readonly slides: Observable<homePageSlide[]> = fakeDB.GetHomePageSlides();
  constructor(private userStateService: UserStateService){
    this.userStateService.updateMain(new ComponentStateMain());
  }

  ngOnInit(): void {

  }

  public addCartItems(event:any): void {
    console.log('lox');
    console.log(event);
    if(event){
      this.tmp='no';
    }
  }

  go(): void {
    console.log(this.tmp);
  }
}

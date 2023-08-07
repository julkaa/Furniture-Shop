import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserStateService} from '../services/user-state.service';
import {crumbBarTypes} from '../services/user-state.models';
import {Subscription} from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'main-section',
  templateUrl: './main.component.html',
  styleUrls: ['../icons.scss', './main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  enums = {
    crumbBarTypes: crumbBarTypes
  }
  crumbBarType: crumbBarTypes = this.enums.crumbBarTypes.none;
  isWarrantyBarActive: boolean = false;
  stateSubscribtion: Subscription | undefined;

  constructor(private userStateService: UserStateService, private router: Router) {
  }

  ngOnInit(): void {
    this.stateSubscribtion = this.userStateService.subscribeMain((value) => {
      this.crumbBarType = value.crumbBar;
      this.isWarrantyBarActive = value.warrantyBar;
    })
  }

  ngOnDestroy(): void {
    this.stateSubscribtion?.unsubscribe();
  }
}


import {Component, Input} from '@angular/core';
import ProductCard from "../../models/productCard.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.scss']
})
export class SuccessDialogComponent {
  @Input() quantity: number = 0;
  @Input() data: Observable<ProductCard[]> | null = null;
}


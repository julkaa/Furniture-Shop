import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ModalDialogConfig} from "./modal-window";

@Component({
  selector: 'cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.scss']
})
export class CartPopupComponent {
constructor( @Inject(MAT_DIALOG_DATA) public dialogConfig: ModalDialogConfig) {
}
log(): void {
  console.log(this.dialogConfig);
}
}

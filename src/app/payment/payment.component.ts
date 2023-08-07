import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {SuccessDialogComponent} from "./success-dialog/success-dialog.component";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  form: FormGroup = new FormGroup({
    nameControl: new FormControl('', Validators.required),
    surnameControl: new FormControl('', Validators.required),
    cardNumberControl: new FormControl('', Validators.required),
    emailControl: new FormControl('', Validators.required),
    monthControl: new FormControl('', Validators.required),
    yearControl: new FormControl('', Validators.required),
    cvvControl: new FormControl('', Validators.required),
  });
  months: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  years: string[] = ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2033', '2034'];

  constructor(private dialog: MatDialog, private router: Router) {
  }

  public processPayment(): void {
    if (this.form?.invalid) {
      const keys = Object.keys(this.form.controls);
      keys.forEach(el => {
        if (this.form.controls[el].status === 'INVALID') {
          this.setError(el);
        }
      });
      return;
    } else {
      const dialogRef = this.dialog.open(SuccessDialogComponent, {width: '400px'});
      setTimeout(() => this.dialog.closeAll(), 4000);
      dialogRef.afterClosed().subscribe(() => this.router.navigateByUrl(''));
    }
  }

  public formatCardNumber(inputElement: any): void {
    let value = inputElement.value
      .replace(/\s+/g, '')
      .replace(/\D/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();

    value = value.slice(0, 19);
    this.form.controls['cardNumberControl'].setValue(value);
  }

  public formatCvv(inputElement: any): void {
    const value = inputElement.value
      .replace(/\s+/g, '')
      .replace(/\D/g, '')
      .slice(0, 3);
    this.form.controls['cvvControl'].setValue(value);
  }

  public formatName(inputElement: any, control: string): void {
    const value = inputElement.value.replace(/\d/g, '');
    this.form.controls[control].setValue(value);
  }

  private setError(control: string): void {
    if (!this.form.controls[control].value) {
      this.form.controls[control].setErrors({required: true});
      this.form.controls[control].markAsTouched();
    }
  }
}

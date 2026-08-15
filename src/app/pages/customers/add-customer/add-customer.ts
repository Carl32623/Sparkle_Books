import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  imports: [ReactiveFormsModule],
  templateUrl: './add-customer.html',
  styleUrl: './add-customer.scss',
})
export class AddCustomer {
  customerForm = new FormGroup({
  firstName: new FormControl('', [
    Validators.required
  ]),

  lastName: new FormControl('', [
    Validators.required
  ]),

  phone: new FormControl('', [
    Validators.required
  ]),

  email: new FormControl('', [
    Validators.required,
    Validators.email
  ])
});
}

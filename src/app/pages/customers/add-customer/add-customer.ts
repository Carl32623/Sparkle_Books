import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  imports: [ReactiveFormsModule],
  templateUrl: './add-customer.html',
  styleUrl: './add-customer.scss',
})
export class AddCustomer {
  states = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE',
  'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
  'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
  'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY',
  'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV',
  'WI', 'WY'
];

  customerForm = new FormGroup({
  firstName: new FormControl('', [
    Validators.required,
    Validators.maxLength(35)
  ]),

  lastName: new FormControl('', [
    Validators.required,
    Validators.maxLength(35)
  ]),

  phone: new FormControl('', [
    Validators.required,
    Validators.maxLength(14),
    Validators.pattern(/^\(\d{3}\) \d{3}-\d{4}$/)
  ]),

  email: new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.maxLength(50)
  ]),

  address: new FormControl('', [
    Validators.required,
    Validators.maxLength(75)
  ]),

  city: new FormControl('', [
    Validators.required,
    Validators.maxLength(50)
  ]),

  state: new FormControl('', [
    Validators.required,
    Validators.maxLength(50)
  ]),

  zipCode: new FormControl('', [
    Validators.required,
    Validators.maxLength(5),
    Validators.pattern(/^\d{5}$/)
  ])
});

formatPhoneNumber(event: Event): void {
    const input = event.target as HTMLInputElement;

    // Remove everything except numbers
    let numbers = input.value.replace(/\D/g, '');

    // Limit to 10 digits
    numbers = numbers.substring(0, 10);

    // Format the phone number
    if (numbers.length <= 3) {
      input.value = numbers;
    }
    else if (numbers.length <= 6) {
      input.value = `(${numbers.substring(0, 3)}) ${numbers.substring(3)}`;
    }
    else {
      input.value = `(${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}-${numbers.substring(6)}`;
    }

    // Update the Angular form control
    this.customerForm.get('phone')?.setValue(input.value, {
      emitEvent: false
    });
  }

  formatZipCode(event: Event): void {
  const input = event.target as HTMLInputElement;

  // Remove everything except numbers
  let numbers = input.value.replace(/\D/g, '');

  // Limit ZIP code to 5 digits
  numbers = numbers.substring(0, 5);

  // Update what is displayed in the input
  input.value = numbers;

  // Update the Angular form control
  this.customerForm.get('zipCode')?.setValue(numbers, {
    emitEvent: false
  });
}
}





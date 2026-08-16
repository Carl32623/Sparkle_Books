import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  imports: [],
  templateUrl: './customers.html',
  styleUrl: './customers.scss',
})
export class Customers {
  constructor(private router: Router) {}

  onAddCustomer(): void {
    this.router.navigate(['/customers/add']);
}
}
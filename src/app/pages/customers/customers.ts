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
    // Navigate to the add customer page
    this.router.navigate(['/customers/add']);
}

  onViewCustomer(id: string): void {
    // Navigate to the customer details page with a sample customer ID 
    this.router.navigate(['/customers', id]);
  }
}
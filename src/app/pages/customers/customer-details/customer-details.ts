import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../../models/customer';

@Component({
  selector: 'app-customer-details',
  imports: [],
  templateUrl: './customer-details.html',
  styleUrl: './customer-details.scss',
})
export class CustomerDetails {
  // Property to hold the customer ID from the route
  constructor(private route: ActivatedRoute) {}

  // Property to hold the customer ID from the route
  customerId: string | null = null;

  // Property to hold the customer details
  customer?: Customer;
  
  // Sample customer data for demonstration purposes
  customers: Customer[] = [
    {
        id: '1',
        firstName: 'John',
        lastName: 'Smith',
        phone: '555-123-4567',
        email: 'john@email.com',
        address: '123 Main St',
        city: 'Livonia',
        state: 'MI',
        zipCode: '48150'
    },
    {
        id: '2',
        firstName: 'Robert',
        lastName: 'Williams',
        phone: '555-555-1234',
        email: 'robert@email.com',
        address: '456 Oak St',
        city: 'Detroit',
        state: 'MI',
        zipCode: '48201'
    },
    {
        id: '3',
        firstName: 'Sarah',
        lastName: 'Johnson',
        phone: '555-987-6543',
        email: 'sarah@email.com',
        address: '789 Pine St',
        city: 'Ann Arbor',
        state: 'MI',
        zipCode: '48104'
    }
];

// Method to retrieve the customer ID from the route parameters
ngOnInit(): void {
    this.customerId = this.route.snapshot.paramMap.get('id');

    this.customer = this.customers.find(
        customer => customer.id === this.customerId
    );

    console.log('Customer ID:', this.customerId);
    console.log('Customer:', this.customer);
}
}




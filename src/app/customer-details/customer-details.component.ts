import { Component } from '@angular/core';
import { CustomerListService } from '../Services/customer-list.service';
import { Customer } from '../Models/customers';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {

  constructor(private customerService: CustomerListService) { }

  customer: Customer;

  ngOnInit() {
    this.customerService.onCustomerViewButtonClicked!.subscribe((data: Customer) => {
      this.customer = data;
    });

  }

}

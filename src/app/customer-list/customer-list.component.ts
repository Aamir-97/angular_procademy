import { Component } from '@angular/core';
import { Customer } from '../Models/customers';
import { CustomerListService } from '../Services/customer-list.service';
import { CustomerDetailsService } from '../Services/customer-details.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  selectedCustomer: Customer;

  customers: Customer[] = [];

  constructor(private customerService: CustomerListService, private customerDetailsService: CustomerDetailsService) { }

  ngOnInit(): void {
    this.customers = this.customerService.customerList
  }

  isPopupVisible: boolean = false;

  onCustomerSelect(customer: Customer) {
    // console.log(customer);
    this.selectedCustomer = customer;

  }

  showAddOrEditUserPopUp(){
    this.isPopupVisible = true;

  }

  closePopup(){
    this.isPopupVisible = false;
  }

  deleteCustomer(customerid: number){
    this.customerService.deleteCustomer(customerid);
    
  }

  viewCustomer(customer: Customer){
    this.customerService.onCustomerDetailsClicked(customer);
  }

}

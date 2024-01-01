import { EventEmitter, Injectable } from '@angular/core';
import { Customer } from '../Models/customers';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerListService {

  constructor(private logger: LoggerService) { }

  onCustomerViewButtonClicked = new EventEmitter<Customer>

  onCustomerDetailsClicked(customer: Customer){
    this.onCustomerViewButtonClicked.emit(customer);
  }

  customerList: Customer[] =
    [
      {
        id: 1,
        name: 'John',
        age: 30,
        address: 'New York',
        phone: '1234567890',
        email: 'gh@gmail.com'
      },
      {
        id: 2,
        name: 'Aamir',
        age: 30,
        address: 'Maruthamunai',
        phone: '0768921234',
        email: 'aamir@gmail.com'
      },
      {
        id: 3,
        name: 'Anfas',
        age: 30,
        address: 'Kalmunai',
        phone: '0758921234',
        email: 'anfas@gmail.com'
      },
      {
        id: 4,
        name: 'Ashafq',
        age: 30,
        address: 'Colombo',
        phone: '0778921234',
        email: 'ashfaq@gmail.com'
      },
      {
        id: 5,
        name: 'Shifrath',
        age: 30,
        address: 'Smmanthurai',
        phone: '1234567890',
        email: 'shifrath@gmail.com'
      },
    ]

  addCustomer(newCustomer: Customer) {
    this.customerList.push(newCustomer);
    this.logger.logAddUser(newCustomer);
  }

  deleteCustomer(customerId: number) {
    // this.customerList = this.customerList.filter((customer) => customer.id !== customerId);
    // this.customerList.map(() => {})
    const index = this.customerList.findIndex((customer) => customer.id === customerId);
    if (index !== -1) {
      this.customerList.splice(index, 1);
      console.log(this.customerList);
    }
  }
}

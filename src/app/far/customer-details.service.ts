import { EventEmitter, Injectable } from '@angular/core';
import { Customer } from '../Models/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {

  constructor() { }

  onCustomerViewButtonClicked = new EventEmitter<Customer>

  onCustomerDetailsClicked(customer: Customer){
    this.onCustomerViewButtonClicked.emit(customer);
  }

}

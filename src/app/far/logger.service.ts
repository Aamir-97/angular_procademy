import { Injectable } from '@angular/core';
import { Customer } from '../Models/customers';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logAddUser(customer: Customer){
    alert('The user "'+customer.name+'" has been created');
  }
}

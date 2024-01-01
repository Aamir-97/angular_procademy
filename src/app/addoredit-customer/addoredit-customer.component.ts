// import { formatDate } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../Models/customers';
import { CustomerListService } from '../Services/customer-list.service';


@Component({
  selector: 'app-addoredit-customer',
  templateUrl: './addoredit-customer.component.html',
  styleUrls: ['./addoredit-customer.component.css']
})
export class AddoreditCustomerComponent {

  constructor(private customerService: CustomerListService){}

  myForm!: FormGroup;
  inValidForm: boolean;

  @Output() closePopupEvent = new EventEmitter();

  // userName: string;
  // userAge: number;
  // userAddress: string;
  // userMobile: string;
  // userEmail: string;

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      age: new FormControl(),
      address: new FormControl(''),
      mobile: new FormControl(''),
      email: new FormControl('', [Validators.email, Validators.required]),
    })

  }




  closePopup(): void {
    this.closePopupEvent.emit();
  }

  userFormSubmit() {
    if (this.myForm.valid) {
      // console.log(this.myForm.get('name')?.value);
      let newCustomer: Customer = {
        id: 0, // to make it default
        name: this.myForm.get('name')?.value,
        age: this.myForm.get('age')?.value,
        address: this.myForm.get('address')?.value,
        phone: this.myForm.get('mobile')?.value,
        email: this.myForm.get('email')?.value,
      };


      // newCustomer.name = this.myForm.get('name')?.value;
      // newCustomer.age = this.myForm.get('age')?.value;
      // newCustomer.address = this.myForm.get('address')?.value;
      // newCustomer.phone = this.myForm.get('mobile')?.value;
      // newCustomer.email = this.myForm.get('email')?.value;
      this.customerService.addCustomer(newCustomer);

      this.closePopup()
    } else {
      this.inValidForm = true;
      // this.myForm.validator
    }
  }

}

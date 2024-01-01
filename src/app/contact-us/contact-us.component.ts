import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  name: string;
  age: number;
  email: string;
  message: string;

  @ViewChild('dob') dob: ElementRef;
  @ViewChild('yourAge') yourAge: ElementRef;

  constructor() { }

  assignAge(){
    let dob = new Date(this.dob.nativeElement.value);
    let timeDiff = Math.abs(Date.now() - dob.getTime());
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    this.yourAge.nativeElement.value = this.age;
  }

}

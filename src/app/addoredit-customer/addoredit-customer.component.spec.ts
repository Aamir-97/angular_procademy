import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoreditCustomerComponent } from './addoredit-customer.component';

describe('AddoreditCustomerComponent', () => {
  let component: AddoreditCustomerComponent;
  let fixture: ComponentFixture<AddoreditCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddoreditCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddoreditCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

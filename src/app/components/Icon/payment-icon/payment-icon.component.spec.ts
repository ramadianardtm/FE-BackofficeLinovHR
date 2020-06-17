import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentIconComponent } from './payment-icon.component';

describe('PaymentIconComponent', () => {
  let component: PaymentIconComponent;
  let fixture: ComponentFixture<PaymentIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileAddressInformationComponent } from './my-profile-address-information.component';

describe('MyProfileAddressInformationComponent', () => {
  let component: MyProfileAddressInformationComponent;
  let fixture: ComponentFixture<MyProfileAddressInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileAddressInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileAddressInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

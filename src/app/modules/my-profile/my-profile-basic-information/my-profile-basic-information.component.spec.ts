import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileBasicInformationComponent } from './my-profile-basic-information.component';

describe('MyProfileBasicInformationComponent', () => {
  let component: MyProfileBasicInformationComponent;
  let fixture: ComponentFixture<MyProfileBasicInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileBasicInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileBasicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

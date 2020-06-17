import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileEducationComponent } from './my-profile-education.component';

describe('MyProfileEducationComponent', () => {
  let component: MyProfileEducationComponent;
  let fixture: ComponentFixture<MyProfileEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileReferenceComponent } from './my-profile-reference.component';

describe('MyProfileReferenceComponent', () => {
  let component: MyProfileReferenceComponent;
  let fixture: ComponentFixture<MyProfileReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

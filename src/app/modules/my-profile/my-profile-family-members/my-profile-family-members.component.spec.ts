import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileFamilyMembersComponent } from './my-profile-family-members.component';

describe('MyProfileFamilyMembersComponent', () => {
  let component: MyProfileFamilyMembersComponent;
  let fixture: ComponentFixture<MyProfileFamilyMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileFamilyMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileFamilyMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

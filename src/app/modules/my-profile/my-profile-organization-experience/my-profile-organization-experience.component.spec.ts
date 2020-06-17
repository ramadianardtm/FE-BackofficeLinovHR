import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileOrganizationExperienceComponent } from './my-profile-organization-experience.component';

describe('MyProfileOrganizationExperienceComponent', () => {
  let component: MyProfileOrganizationExperienceComponent;
  let fixture: ComponentFixture<MyProfileOrganizationExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileOrganizationExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileOrganizationExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

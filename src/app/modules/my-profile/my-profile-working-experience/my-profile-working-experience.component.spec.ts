import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileWorkingExperienceComponent } from './my-profile-working-experience.component';

describe('MyProfileWorkingExperienceComponent', () => {
  let component: MyProfileWorkingExperienceComponent;
  let fixture: ComponentFixture<MyProfileWorkingExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileWorkingExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileWorkingExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

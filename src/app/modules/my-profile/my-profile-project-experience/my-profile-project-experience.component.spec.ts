import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileProjectExperienceComponent } from './my-profile-project-experience.component';

describe('MyProfileProjectExperienceComponent', () => {
  let component: MyProfileProjectExperienceComponent;
  let fixture: ComponentFixture<MyProfileProjectExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileProjectExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileProjectExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

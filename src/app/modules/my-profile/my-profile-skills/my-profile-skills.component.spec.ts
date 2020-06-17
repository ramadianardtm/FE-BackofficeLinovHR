import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileSkillsComponent } from './my-profile-skills.component';

describe('MyProfileSkillsComponent', () => {
  let component: MyProfileSkillsComponent;
  let fixture: ComponentFixture<MyProfileSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

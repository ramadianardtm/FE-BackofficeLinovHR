import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileTrainingComponent } from './my-profile-training.component';

describe('MyProfileTrainingComponent', () => {
  let component: MyProfileTrainingComponent;
  let fixture: ComponentFixture<MyProfileTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

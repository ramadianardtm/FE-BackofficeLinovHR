import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobVacancyNonuserComponent } from './job-vacancy-nonuser.component';

describe('JobVacancyNonuserComponent', () => {
  let component: JobVacancyNonuserComponent;
  let fixture: ComponentFixture<JobVacancyNonuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobVacancyNonuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobVacancyNonuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobVacancyDetailComponent } from './job-vacancy-detail.component';

describe('JobVacancyDetailComponent', () => {
  let component: JobVacancyDetailComponent;
  let fixture: ComponentFixture<JobVacancyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobVacancyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobVacancyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

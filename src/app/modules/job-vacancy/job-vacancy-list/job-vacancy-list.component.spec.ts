import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobVacancyListComponent } from './job-vacancy-list.component';

describe('JobVacancyListComponent', () => {
  let component: JobVacancyListComponent;
  let fixture: ComponentFixture<JobVacancyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobVacancyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobVacancyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

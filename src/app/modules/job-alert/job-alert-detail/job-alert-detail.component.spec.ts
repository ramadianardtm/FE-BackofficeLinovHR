import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAlertDetailComponent } from './job-alert-detail.component';

describe('JobAlertDetailComponent', () => {
  let component: JobAlertDetailComponent;
  let fixture: ComponentFixture<JobAlertDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAlertDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAlertDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

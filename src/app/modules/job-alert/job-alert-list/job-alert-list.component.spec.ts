import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAlertListComponent } from './job-alert-list.component';

describe('JobAlertListComponent', () => {
  let component: JobAlertListComponent;
  let fixture: ComponentFixture<JobAlertListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAlertListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAlertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

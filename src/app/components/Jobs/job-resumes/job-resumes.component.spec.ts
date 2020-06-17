import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobResumesComponent } from './job-resumes.component';

describe('JobResumesComponent', () => {
  let component: JobResumesComponent;
  let fixture: ComponentFixture<JobResumesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobResumesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobResumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

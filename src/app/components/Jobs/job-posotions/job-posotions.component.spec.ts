import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPosotionsComponent } from './job-posotions.component';

describe('JobPosotionsComponent', () => {
  let component: JobPosotionsComponent;
  let fixture: ComponentFixture<JobPosotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPosotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPosotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTicketDetailComponent } from './project-ticket-detail.component';

describe('ProjectTicketDetailComponent', () => {
  let component: ProjectTicketDetailComponent;
  let fixture: ComponentFixture<ProjectTicketDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTicketDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTicketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTicketListComponent } from './project-ticket-list.component';

describe('ProjectTicketListComponent', () => {
  let component: ProjectTicketListComponent;
  let fixture: ComponentFixture<ProjectTicketListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTicketListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

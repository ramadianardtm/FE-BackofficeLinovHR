import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTodoListComponent } from './project-todo-list.component';

describe('ProjectTodoListComponent', () => {
  let component: ProjectTodoListComponent;
  let fixture: ComponentFixture<ProjectTodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

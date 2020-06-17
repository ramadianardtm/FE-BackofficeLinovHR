import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApplicationsListComponent } from './my-applications-list.component';

describe('MyApplicationsListComponent', () => {
  let component: MyApplicationsListComponent;
  let fixture: ComponentFixture<MyApplicationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyApplicationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApplicationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

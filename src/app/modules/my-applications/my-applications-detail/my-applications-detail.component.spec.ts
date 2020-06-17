import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApplicationsDetailComponent } from './my-applications-detail.component';

describe('MyApplicationsDetailComponent', () => {
  let component: MyApplicationsDetailComponent;
  let fixture: ComponentFixture<MyApplicationsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyApplicationsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApplicationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

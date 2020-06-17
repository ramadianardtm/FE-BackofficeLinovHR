import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileDocumentsComponent } from './my-profile-documents.component';

describe('MyProfileDocumentsComponent', () => {
  let component: MyProfileDocumentsComponent;
  let fixture: ComponentFixture<MyProfileDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

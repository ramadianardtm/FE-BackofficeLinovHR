import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileLanguagesComponent } from './my-profile-languages.component';

describe('MyProfileLanguagesComponent', () => {
  let component: MyProfileLanguagesComponent;
  let fixture: ComponentFixture<MyProfileLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

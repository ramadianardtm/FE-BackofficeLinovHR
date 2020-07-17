import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWithDateComponent } from './search-with-date.component';

describe('SearchWithDateComponent', () => {
  let component: SearchWithDateComponent;
  let fixture: ComponentFixture<SearchWithDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWithDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWithDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

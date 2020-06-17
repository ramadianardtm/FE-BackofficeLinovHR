import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTopbarComponent } from './page-topbar.component';

describe('PageTopbarComponent', () => {
  let component: PageTopbarComponent;
  let fixture: ComponentFixture<PageTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

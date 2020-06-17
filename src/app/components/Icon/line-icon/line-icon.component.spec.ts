import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineIconComponent } from './line-icon.component';

describe('LineIconComponent', () => {
  let component: LineIconComponent;
  let fixture: ComponentFixture<LineIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

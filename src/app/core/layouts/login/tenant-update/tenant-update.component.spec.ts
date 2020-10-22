import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantUpdateComponent } from './tenant-update.component';

describe('TenantUpdateComponent', () => {
  let component: TenantUpdateComponent;
  let fixture: ComponentFixture<TenantUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

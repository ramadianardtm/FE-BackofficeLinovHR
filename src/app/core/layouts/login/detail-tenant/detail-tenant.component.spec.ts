import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTenantComponent } from './detail-tenant.component';

describe('DetailTenantComponent', () => {
  let component: DetailTenantComponent;
  let fixture: ComponentFixture<DetailTenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

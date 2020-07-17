import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderTopAdminComponent } from './header-top-admin.component';



describe('HeaderTopComponent', () => {
  let component: HeaderTopAdminComponent;
  let fixture: ComponentFixture<HeaderTopAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderTopAdminComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTopAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

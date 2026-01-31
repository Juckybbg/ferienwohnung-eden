import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.header-title')).toBeTruthy();
  });

  it('should display the phone number', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const phone = compiled.querySelector('.header-phone');
    expect(phone?.textContent).toContain('0951 53771');
  });
});

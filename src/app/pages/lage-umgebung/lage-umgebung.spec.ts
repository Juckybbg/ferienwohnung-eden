import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LageUmgebung } from './lage-umgebung';

describe('LageUmgebung', () => {
  let component: LageUmgebung;
  let fixture: ComponentFixture<LageUmgebung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LageUmgebung]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LageUmgebung);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

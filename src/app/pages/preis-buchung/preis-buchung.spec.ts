import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreisBuchung } from './preis-buchung';

describe('PreisBuchung', () => {
  let component: PreisBuchung;
  let fixture: ComponentFixture<PreisBuchung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreisBuchung],
    }).compileComponents();

    fixture = TestBed.createComponent(PreisBuchung);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

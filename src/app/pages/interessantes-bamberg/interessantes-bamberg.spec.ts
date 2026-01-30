import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteressantesBamberg } from './interessantes-bamberg';

describe('InteressantesBamberg', () => {
  let component: InteressantesBamberg;
  let fixture: ComponentFixture<InteressantesBamberg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteressantesBamberg],
    }).compileComponents();

    fixture = TestBed.createComponent(InteressantesBamberg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

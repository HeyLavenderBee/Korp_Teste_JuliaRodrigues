import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxNotePrint } from './tax-note-print';

describe('TaxNotePrint', () => {
  let component: TaxNotePrint;
  let fixture: ComponentFixture<TaxNotePrint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxNotePrint],
    }).compileComponents();

    fixture = TestBed.createComponent(TaxNotePrint);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

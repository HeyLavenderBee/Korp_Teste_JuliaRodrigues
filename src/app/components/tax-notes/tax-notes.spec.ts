import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxNotes } from './tax-notes';

describe('TaxNotes', () => {
  let component: TaxNotes;
  let fixture: ComponentFixture<TaxNotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxNotes],
    }).compileComponents();

    fixture = TestBed.createComponent(TaxNotes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

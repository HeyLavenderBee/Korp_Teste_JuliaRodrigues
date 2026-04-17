import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxNoteDetails } from './tax-note-details';

describe('TaxNoteDetails', () => {
  let component: TaxNoteDetails;
  let fixture: ComponentFixture<TaxNoteDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxNoteDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(TaxNoteDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

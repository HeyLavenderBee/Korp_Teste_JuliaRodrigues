import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxNoteForm } from './tax-note-form';

describe('TaxNoteForm', () => {
  let component: TaxNoteForm;
  let fixture: ComponentFixture<TaxNoteForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxNoteForm],
    }).compileComponents();

    fixture = TestBed.createComponent(TaxNoteForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

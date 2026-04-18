import { TestBed } from '@angular/core/testing';

import { SendTaxNoteForm } from './send-tax-note-form';

describe('SendTaxNoteForm', () => {
  let service: SendTaxNoteForm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendTaxNoteForm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetTaxNotes } from './get-tax-notes';

describe('GetTaxNotes', () => {
  let service: GetTaxNotes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTaxNotes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

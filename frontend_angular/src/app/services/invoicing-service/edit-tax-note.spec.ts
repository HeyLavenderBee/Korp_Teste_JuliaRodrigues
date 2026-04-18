import { TestBed } from '@angular/core/testing';

import { EditTaxNote } from './edit-tax-note';

describe('EditTaxNote', () => {
  let service: EditTaxNote;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditTaxNote);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SendProductForm } from './send-product-form';

describe('SendProductForm', () => {
  let service: SendProductForm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendProductForm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

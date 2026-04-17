import { TestBed } from '@angular/core/testing';

import { EditProduct } from './edit-product';

describe('EditProduct', () => {
  let service: EditProduct;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditProduct);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

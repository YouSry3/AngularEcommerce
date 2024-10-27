import { TestBed } from '@angular/core/testing';

import { ApiCartsService } from './api-carts.service';

describe('ApiCartsService', () => {
  let service: ApiCartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CartsApiService } from './carts-api.service';

describe('CartsApiService', () => {
  let service: CartsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

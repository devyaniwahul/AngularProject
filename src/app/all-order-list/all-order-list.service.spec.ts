import { TestBed } from '@angular/core/testing';

import { AllOrderListService } from './all-order-list.service';

describe('AllOrderListService', () => {
  let service: AllOrderListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllOrderListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

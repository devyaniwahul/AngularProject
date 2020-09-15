import { TestBed } from '@angular/core/testing';

import { MRloginService } from './mrlogin.service';

describe('MRloginService', () => {
  let service: MRloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MRloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MRRegisterService } from './mrregister.service';

describe('MRRegisterService', () => {
  let service: MRRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MRRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

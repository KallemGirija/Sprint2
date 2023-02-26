import { TestBed } from '@angular/core/testing';

import { BillOperationsService } from './bill-operations.service';

describe('BillOperationsService', () => {
  let service: BillOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

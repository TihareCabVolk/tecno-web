import { TestBed } from '@angular/core/testing';

import { WcdonaldsService } from './wcdonalds.service';

describe('WcdonaldsService', () => {
  let service: WcdonaldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WcdonaldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

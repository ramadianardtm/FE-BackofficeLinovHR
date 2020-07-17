import { TestBed } from '@angular/core/testing';

import { DetailLookupService } from './detail-lookup.service';

describe('DetailLookupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailLookupService = TestBed.get(DetailLookupService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RevService } from './rev.service';

describe('RevService', () => {
  let service: RevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

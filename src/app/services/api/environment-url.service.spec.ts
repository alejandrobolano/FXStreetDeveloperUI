import { TestBed } from '@angular/core/testing';

import { EnvironmentUrlService } from './environment-url.service';

describe('EnvironmentUrlServiceService', () => {
  let service: EnvironmentUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvironmentUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MinutesRepositoryService } from './minutes-repository.service';

describe('MinutesRepositoryService', () => {
  let service: MinutesRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinutesRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

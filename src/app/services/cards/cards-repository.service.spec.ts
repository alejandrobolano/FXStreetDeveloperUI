import { TestBed } from '@angular/core/testing';

import { CardsRepositoryService } from './cards-repository.service';

describe('StatisticsService', () => {
  let service: CardsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

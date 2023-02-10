import { TestBed } from '@angular/core/testing';

import { LoaderHandlerService } from './loader-handler.service';

describe('LoaderHandlerService', () => {
  let service: LoaderHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

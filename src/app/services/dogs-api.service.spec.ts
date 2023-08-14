import { TestBed } from '@angular/core/testing';

import { DogsApiService } from './dogs-api.service';

describe('DogsApiService', () => {
  let service: DogsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

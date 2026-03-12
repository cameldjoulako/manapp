import { TestBed } from '@angular/core/testing';

import { AployeeApi } from './aployee-api';

describe('AployeeApi', () => {
  let service: AployeeApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AployeeApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

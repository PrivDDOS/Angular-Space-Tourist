import { TestBed } from '@angular/core/testing';

import { JsonData } from './json-data';

describe('JsonData', () => {
  let service: JsonData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

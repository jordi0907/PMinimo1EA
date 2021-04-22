import { TestBed } from '@angular/core/testing';

import { CopiasService } from './copias.service';

describe('CopiasService', () => {
  let service: CopiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

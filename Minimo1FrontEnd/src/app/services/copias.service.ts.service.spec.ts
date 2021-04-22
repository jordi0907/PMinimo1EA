import { TestBed } from '@angular/core/testing';

import { Copias.Service.TsService } from './copias.service.ts.service';

describe('Copias.Service.TsService', () => {
  let service: Copias.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Copias.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

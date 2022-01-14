import { TestBed } from '@angular/core/testing';

import { ContadoresService } from './contadores.service';

describe('ContadoresService', () => {
  let service: ContadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

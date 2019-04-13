import { TestBed } from '@angular/core/testing';

import { MediopagoService } from './mediopago.service';

describe('MediopagoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediopagoService = TestBed.get(MediopagoService);
    expect(service).toBeTruthy();
  });
});

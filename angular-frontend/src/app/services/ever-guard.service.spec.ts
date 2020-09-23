import { TestBed } from '@angular/core/testing';

import { EverGuardService } from './ever-guard.service';

describe('SpinnerGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EverGuardService = TestBed.get(EverGuardService);
    expect(service).toBeTruthy();
  });
});

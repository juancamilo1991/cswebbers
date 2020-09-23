import { TestBed } from '@angular/core/testing';

import { ButtonStateService } from './button-state.service';

describe('ButtonStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ButtonStateService = TestBed.get(ButtonStateService);
    expect(service).toBeTruthy();
  });
});

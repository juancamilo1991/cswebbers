import { TestBed } from '@angular/core/testing';

import { SimpleEvalService } from './simple-eval.service';

describe('SimpleEvalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleEvalService = TestBed.get(SimpleEvalService);
    expect(service).toBeTruthy();
  });
});

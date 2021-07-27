import { TestBed } from '@angular/core/testing';

import { QuestionSourceService } from './question-source.service';

describe('QuestionSourceService', () => {
  let service: QuestionSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

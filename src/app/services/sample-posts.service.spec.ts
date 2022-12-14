import { TestBed } from '@angular/core/testing';

import { SamplePostsService } from './sample-posts.service';

describe('SamplePostsService', () => {
  let service: SamplePostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamplePostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

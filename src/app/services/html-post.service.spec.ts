import { TestBed, inject } from '@angular/core/testing';

import { HtmlPostService } from './html-post.service';

describe('HtmlPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HtmlPostService]
    });
  });

  it('should be created', inject([HtmlPostService], (service: HtmlPostService) => {
    expect(service).toBeTruthy();
  }));
});

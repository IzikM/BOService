import { TestBed, inject } from '@angular/core/testing';

import { HtmlGetService } from './html-get.service';

describe('HtmlGetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HtmlGetService]
    });
  });

  it('should be created', inject([HtmlGetService], (service: HtmlGetService) => {
    expect(service).toBeTruthy();
  }));
});

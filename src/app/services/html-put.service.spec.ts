import { TestBed, inject } from '@angular/core/testing';

import { HtmlPutService } from './html-put.service';

describe('HtmlPutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HtmlPutService]
    });
  });

  it('should be created', inject([HtmlPutService], (service: HtmlPutService) => {
    expect(service).toBeTruthy();
  }));
});

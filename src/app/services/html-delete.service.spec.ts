import { TestBed, inject } from '@angular/core/testing';

import { HtmlDeleteService } from './html-delete.service';

describe('HtmlDeleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HtmlDeleteService]
    });
  });

  it('should be created', inject([HtmlDeleteService], (service: HtmlDeleteService) => {
    expect(service).toBeTruthy();
  }));
});

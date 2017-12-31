import { TestBed, inject } from '@angular/core/testing';

import { BoConfigService } from './bo-config.service';

describe('BoConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoConfigService]
    });
  });

  it('should be created', inject([BoConfigService], (service: BoConfigService) => {
    expect(service).toBeTruthy();
  }));
});

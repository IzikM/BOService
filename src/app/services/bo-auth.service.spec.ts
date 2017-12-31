import { TestBed, inject } from '@angular/core/testing';

import { BoAuthService } from './bo-auth.service';

describe('BoAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoAuthService]
    });
  });

  it('should be created', inject([BoAuthService], (service: BoAuthService) => {
    expect(service).toBeTruthy();
  }));
});

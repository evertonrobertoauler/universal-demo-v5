import { TestBed, inject } from '@angular/core/testing';

import { CookiesService } from './cookies.service';

describe('CookiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookiesService]
    });
  });

  it('should be created', inject([CookiesService], (service: CookiesService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { TranslateApiService } from '../api/translate-api.service';
import { of } from 'rxjs';

describe('TranslateApiService', () => {
  let service: TranslateApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: { get: () => of('dog') },
        },
        { provide: TranslateApiService },
      ],
    });
    service = TestBed.inject(TranslateApiService);
  });

  it('translateJaToEn() should translate Ja to En', () => {
    const expected = 'dog';
    service.translateJaToEn('犬').subscribe((result) => {
      expect(result).toBe(expected);
    });
  });
});

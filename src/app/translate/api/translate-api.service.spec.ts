import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { TranslateApiService } from '../api/translate-api.service';
import { of } from 'rxjs';

describe('TranslateApiService', () => {
  let service: TranslateApiService;
  let language: 'engilsh' | 'japanese';
  const response = { engilsh: 'dog', japanese: '犬' };
  const expected = { engilsh: 'dog', japanese: '犬' };

  const httpClientMock = {
    get: () => of(response[language]),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpClientMock,
        },
        { provide: TranslateApiService },
      ],
    });
    service = TestBed.inject(TranslateApiService);
  });

  it('translateJaToEn() should translate Ja to En', () => {
    language = 'engilsh';
    service.translateJaToEn('犬').subscribe((result) => {
      console.log(`expect(${result}).toBe(${expected[language]})`);
      expect(result).toBe(expected[language]);
    });
  });

  it('translateEnToJa() should translate En to Ja', () => {
    language = 'japanese';
    service.translateEnToJa('dog').subscribe((result) => {
      console.log(`expect(${result}).toBe(${expected[language]})`);
      expect(result).toBe(expected[language]);
    });
  });
});

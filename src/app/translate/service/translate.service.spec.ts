import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { of } from 'rxjs';
import { take, delay } from 'rxjs/operators';

import { TranslateService } from './translate.service';
import { TranslateApiService } from '../api/translate-api.service';
import { TranslateEffects } from '../state/translate.effects';
import { translateFeatureName, TranslateState } from '../state/translate.state';
import { reducer } from '../state/translate.reducer';

describe('TodolistService', () => {
  let service: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TranslateApiService,
          useValue: {
            translateJaToEn: (text: string) => of('dog').pipe(delay(2000)),
          },
        },
        { provide: TranslateService },
      ],
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(translateFeatureName, reducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([TranslateEffects]),
      ],
    });
    service = TestBed.inject(TranslateService);
  });

  it('translateJaToEn() should translate Ja to En', (done: DoneFn) => {
    const expected: TranslateState[] = [
      { result: '', loading: true },
      { result: 'dog', loading: false },
    ];
    service.translateJaToEn('犬');

    let i = 0;
    service
      .getLoading()
      .pipe(take(2))
      .subscribe((loading) => {
        console.log(`expect(${loading}).toBe(${expected[i].loading})`);
        expect(loading).toBe(expected[i].loading);
        i++;
      });

    let j = 0;
    service
      .getResult()
      .pipe(take(2))
      .subscribe((result) => {
        console.log(`expect(${result}).toBe(${expected[j].result})`);
        expect(result).toBe(expected[j].result);
        j++;
        if (j === 2) done();
      });
  });
});

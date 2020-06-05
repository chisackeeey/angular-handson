import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';

import { TranslateService } from './translate.service';
import { translateFeatureName } from '../state/translate.state';
import { reducer } from '../state/translate.reducer';

describe('TodolistService', () => {
  let service: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: null },
        { provide: TranslateService },
      ],
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(translateFeatureName, reducer),
      ],
    });
    service = TestBed.inject(TranslateService);
  });

  it('addTodo() should add todo', () => {
    const expected = {
      result: 'dog',
      loading: false,
    };
    service.translateJaToEn('犬');
    service.getLoading().subscribe((loading) => {
      expect(loading).toBe(expected.loading);
    });
    // service.getResult().subscribe((result) => {
    //   expect(result).toBe(expected.result);
    // });
  });
});

import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';

import { TranslateApiService } from '../api/translate-api.service';
import * as TranslateActions from './translate.actions';

@Injectable({ providedIn: 'root' })
export class TranslateEffects {
  constructor(private actions$: Actions, private api: TranslateApiService) {}

  translateJaToEn = createEffect(() =>
    this.actions$.pipe(
      ofType(TranslateActions.translateJaToEn),
      concatMap(({ text }) =>
        this.api
          .translateJaToEn(text)
          .pipe(map((result) => TranslateActions.setResult({ result })))
      )
    )
  );

  translateEnToJa = createEffect(() =>
    this.actions$.pipe(
      ofType(TranslateActions.translateEnToJa),
      concatMap(({ text }) =>
        this.api
          .translateJaToEn(text)
          .pipe(map((result) => TranslateActions.setResult({ result })))
      )
    )
  );
}

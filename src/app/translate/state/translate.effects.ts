import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { TranslateApiService } from '../api/translate-api.service';
import * as TranslateActions from './translate.actions';

@Injectable({ providedIn: 'root' })
export class TranslateEffects {
  constructor(private actions$: Actions, private api: TranslateApiService) {}

  translateJaToEn = createEffect(() =>
    this.actions$.pipe(
      ofType(TranslateActions.translateJaToEn),
      switchMap(({ text }) =>
        this.api.translateJaToEn(text).pipe(
          map((result) => TranslateActions.setResult({ result })),
          catchError(this.handleError)
        )
      )
    )
  );

  translateEnToJa = createEffect(() =>
    this.actions$.pipe(
      ofType(TranslateActions.translateEnToJa),
      switchMap(({ text }) =>
        this.api.translateEnToJa(text).pipe(
          map((result) => TranslateActions.setResult({ result })),
          catchError(this.handleError)
        )
      )
    )
  );

  private handleError = (error: HttpErrorResponse) => {
    alert(error.statusText);
    return of(TranslateActions.alertError({ error }));
  };
}

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as TranslateActions from '../state/translate.actions';
import { selectResult, selectLoading } from '../state/translate.state';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  constructor(private store: Store<[]>) {}

  getResult() {
    return this.store.select(selectResult);
  }

  getLoading() {
    return this.store.select(selectLoading);
  }

  translateJaToEn(text: string) {
    console.log('service' + text);
    return this.store.dispatch(TranslateActions.translateJaToEn({ text }));
  }

  translateEnToJa(text: string) {
    console.log('service' + text);
    return this.store.dispatch(TranslateActions.translateEnToJa({ text }));
  }
}

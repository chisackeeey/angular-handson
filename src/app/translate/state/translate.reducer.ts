import { createReducer, on, Action } from '@ngrx/store';
import { TranslateState, initialState } from './translate.state';
import * as TranslateActions from './translate.actions';

export const translateReducer = createReducer(
  initialState,
  on(TranslateActions.translateJaToEn, (state) => {
    return { ...state, loading: true };
  }),
  on(TranslateActions.translateEnToJa, (state) => {
    return { ...state, loading: true };
  }),
  on(TranslateActions.setResult, (state, { result }) => {
    return { ...state, loading: false, result };
  }),
  on(TranslateActions.alertError, (state) => {
    return { ...state, loading: false };
  })
);

export function reducer(state: TranslateState, action: Action) {
  return translateReducer(state, action);
}

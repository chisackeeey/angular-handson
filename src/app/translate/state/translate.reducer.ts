import { createReducer, on, Action } from '@ngrx/store';
import { TranslateState, initialState } from './translate.state';
import * as TranslateActions from './translate.actions';

export const reducer = createReducer(
  initialState,
  on(TranslateActions.translateJaToEn, (state) => {
    return { ...state, loading: true };
  }),
  on(TranslateActions.translateEnToJa, (state) => {
    return { ...state, loading: true };
  }),
  on(TranslateActions.setResult, (state, { result }) => {
    return { ...state, loading: false, result };
  })
);

export function translateReducer(state: TranslateState, action: Action) {
  return reducer(state, action);
}

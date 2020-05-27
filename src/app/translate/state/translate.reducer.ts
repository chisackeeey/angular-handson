import { createReducer, on, Action, State } from '@ngrx/store';
import { TranslateState, initialState } from './translate.state';
import * as TranslateActions from './translate.actions';

export const reducer = createReducer(
  initialState,
  on(TranslateActions.translateJaToEn, (state) => ({})),
  on(TranslateActions.translateEnToJa, (state) => ({}))
);

export function translateReducer(state: TranslateState, action: Action) {
  return reducer(state, action);
}

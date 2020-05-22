import { Action } from '@ngrx/store';

export const counterFeatureKey = 'counter';

export interface State {}

export const initialState: State = {};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    default:
      return state;
  }
}

import { createReducer, on, Action } from '@ngrx/store';
import { State, initialState } from './hello.state';
import * as HelloActions from './hello.actions';

export const helloReducer = createReducer(
  initialState,
  on(HelloActions.setName, (state, { name }) => {
    return { ...state, name };
  })
);

export function reducer(state: State, action: Action) {
  return helloReducer(state, action);
}

import { createReducer, on, Action } from '@ngrx/store';
import { CounterState, initialState } from './counter.state';
import * as CounterActions from './counter.actions';

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.countUp, (state) => ({ ...state, count: state.count + 1 })),
  on(CounterActions.countDown, (state) => ({
    ...state,
    count: state.count - 1,
  })),
  on(CounterActions.countPower, (state) => ({
    ...state,
    count: state.count ** 2,
  }))
);

export function reducer(state: CounterState, action: Action) {
  return counterReducer(state, action);
}

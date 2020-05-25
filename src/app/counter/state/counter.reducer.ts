import { createReducer, on, Action } from '@ngrx/store';
import { CounterState, initialState } from './counter.state';
import * as CounterActions from './counter.actions';

export const reducer = createReducer(
  initialState,
  on(CounterActions.CountUp, (state) => ({ ...state, count: state.count + 1 })),
  on(CounterActions.CountDown, (state) => ({
    ...state,
    count: state.count - 1,
  })),
  on(CounterActions.CountPower, (state) => ({
    ...state,
    count: state.count ** 2,
  }))
);

export function counterReducer(state: CounterState, action: Action) {
  return reducer(state, action);
}

import { CounterState } from '../state/counter.state';
import * as CounterActions from './counter.actions';
import { reducer } from './counter.reducer';

let initialState: CounterState;

beforeEach(() => {
  initialState = {
    count: 2,
  };
});

describe('CountReducer', () => {
  it('should increment count', () => {
    const state = initialState;
    const action = CounterActions.countUp;
    const newState = reducer(state, action);

    expect(newState.count).toBe(3);
  });

  it('should decrement count', () => {
    const state = initialState;
    const action = CounterActions.countDown;
    const newState = reducer(state, action);

    expect(newState.count).toBe(1);
  });

  it('should square count', () => {
    const state = initialState;
    const action = CounterActions.countPower;
    const newState = reducer(state, action);

    expect(newState.count).toBe(4);
  });
});
